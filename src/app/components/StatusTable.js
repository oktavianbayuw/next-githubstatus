"use client";

import { useState } from 'react';
import axios from 'axios';

const apis = [
    { name: 'API Status', url: 'https://www.githubstatus.com/api/v2/status.json' },
    { name: 'API Summary', url: 'https://www.githubstatus.com/api/v2/summary.json' },
    { name: 'API Components', url: 'https://www.githubstatus.com/api/v2/components.json' },
    { name: 'Unresolved incidents', url: 'https://www.githubstatus.com/api/v2/incidents/unresolved.json' },
    { name: 'All incidents', url: 'https://www.githubstatus.com/api/v2/incidents.json' },
    { name: 'Upcoming scheduled maintenances', url: 'https://www.githubstatus.com/api/v2/scheduled-maintenances/upcoming.json' },
    { name: 'Active scheduled maintenances', url: 'https://www.githubstatus.com/api/v2/scheduled-maintenances/active.json' },
    { name: 'All scheduled maintenances', url: 'https://www.githubstatus.com/api/v2/scheduled-maintenances.json' },
];

const StatusTable = () => {
    const [results, setResults] = useState({});
  
    const checkAPI = async (api) => {
      try {
        const response = await axios.get(api.url);
        setResults((prevResults) => ({
          ...prevResults,
          [api.name]: JSON.stringify(response.data, null, 2),
        }));
      } catch (error) {
        setResults((prevResults) => ({
          ...prevResults,
          [api.name]: 'Error fetching status',
        }));
      }
    };
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-center">Nama API</th>
              <th className="py-2 px-4 border-b text-center">Check API</th>
              <th className="py-2 px-4 border-b text-center">Result</th>
            </tr>
          </thead>
          <tbody>
            {apis.map((api) => (
              <tr key={api.name}>
                <td className="py-2 px-4 border-b text-center">{api.name}</td>
                <td className="py-2 px-4 border-b text-center">
                  <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white p-2 text-sm hover:bg-blue-600"
                        onClick={() => checkAPI(api)}
                    >
                        check
                    </button>
                  </div>
                </td>
                <td className="py-2 px-4 border-b max-w-sm overflow-auto">
                  <pre className="whitespace-pre-wrap text-left ml-4">{results[api.name]}</pre>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StatusTable;
