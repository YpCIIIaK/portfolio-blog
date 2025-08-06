import React from 'react';

const Table = () => {
    const columns = ['Name', 'Age', 'Email'];
    const data = [
        { Name: 'Vladimir Vladimirov', Age: 20, Email: 'bigboyvova01@gmail.com' },
        { Name: 'Vladimir Vladimirov', Age: 20, Email: 'bigboyvova01@gmail.com' },
        { Name: 'Vladimir Vladimirov', Age: 20, Email: 'bigboyvova01@gmail.com' },
    ];

    const baseStyles = 'min-w-full border border-primary';
    const headerStyles = 'bg-primary text-textPrimary text-left font-semibold p-4 border-b border-secondary';
    const rowStyles = 'p-4 border-b border-gray-300 hover:bg-primary/10';

    return (
        <table className={baseStyles}>
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className={headerStyles}>
                        {column}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowStyles}>
                    {columns.map((column, colIndex) => (
                        <td key={colIndex} className="p-4 text-textPrimary">
                            {row[column]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

const App = () => (
    <div className="p-6">
        <Table />
    </div>
);

export default App;
