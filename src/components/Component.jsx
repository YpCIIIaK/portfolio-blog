import React from 'react';
import { useParams } from 'react-router-dom';
import { componentsPages } from "../data/componentsPages.js";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from '../contexts/LanguageContext';
import { useComponentsData, useTranslations } from '../locales/translations';

const Component = () => {
    const { componentId } = useParams();
    const { language } = useLanguage();
    const translatedComponents = useComponentsData(language);
    const t = useTranslations(language);
    
    // Сначала ищем переведённые данные
    let componentData = translatedComponents.find(page => page.link === componentId);
    
    // Если не найдены переведённые данные, используем оригинальные
    if (!componentData) {
        componentData = componentsPages.find(page => page.link === componentId);
    }

    if (!componentData) {
        return <div>{t.components.notFound}</div>;
    }

    const { render: RenderedComponent } = componentData;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{componentData.title}</h1>
            <div className="mt-4">
                <ReactMarkdown
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={atomDark}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                        h2: ({ children }) => (
                            <h2 className="mt-4 text-xl font-semibold">{children}</h2>
                        ),
                    }}
                >
                    {componentData.content}
                </ReactMarkdown>
            </div>
            {RenderedComponent && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-5">{t.components.renderedComponent}</h2>
                    <RenderedComponent />
                </div>
            )}
        </div>
    );
};

export default Component;
