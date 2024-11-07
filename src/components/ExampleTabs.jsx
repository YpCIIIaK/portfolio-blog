import React, { useState } from 'react';

const ExampleTabs = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Стили вкладок с заданными цветами
    const tabStyles = `mr-1 py-2 px-4 transition-all flex items-center justify-center w-32 text-center rounded-lg bg-[#0a192f] text-[#64ffda] hover:bg-[#64ffda]/10 border border-[#64ffda]`;

    return (
        <div className="bg-[#0a192f] text-[#ccd6f6] flex flex-col items-center justify-center">
            <div>
                <div className="flex mb-4">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`${tabStyles} ${activeTab === 'overview' ? 'font-bold' : 'text-[#8892b0]'}`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('details')}
                        className={`${tabStyles} ${activeTab === 'details' ? 'font-bold' : 'text-[#8892b0]'}`}
                    >
                        Details
                    </button>
                    <button
                        onClick={() => setActiveTab('contact')}
                        className={`${tabStyles} ${activeTab === 'contact' ? 'font-bold' : 'text-[#8892b0]'}`}
                    >
                        Contact
                    </button>
                </div>

                <div className="p-4 bg-[#0a192f] text-[#ccd6f6] rounded-lg border border-[#64ffda]">
                    {activeTab === 'overview' && <p>This is the Overview content.</p>}
                    {activeTab === 'details' && <p>Here are the Details.</p>}
                    {activeTab === 'contact' && <p>Contact information goes here.</p>}
                </div>
            </div>
        </div>
    );
};

export default ExampleTabs;
