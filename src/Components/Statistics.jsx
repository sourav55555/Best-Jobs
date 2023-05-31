import React , { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageBanner from './PageBanner';

const Statistics = () => {

    const marksData = [
        {
            name: 'Assignment 1',
            marks: 60
        },
        {
            name: 'Assignment 2',
            marks: 60
        },
        {
            name: 'Assignment 3',
            marks: 60
        },
        {
            name: 'Assignment 4',
            marks: 60
        },
        {
            name: 'Assignment 5',
            marks: 53
        },
        {
            name: 'Assignment 6',
            marks: 60
        },
        {
            name: 'Assignment 7',
            marks: 60
        },
        {
            name: 'Assignment 8',
            marks: 60
        }
    ]
    return (
        <div>
            <PageBanner>Statistics</PageBanner>
            <div className='my-container text-center w-full h-[350px] mb-36'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={marksData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="marks"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;