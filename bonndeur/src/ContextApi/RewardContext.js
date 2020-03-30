import React, { useState,createContext } from 'react';

export const RewardContext = createContext(null);


export const RewardProvider = (props) => {
    const [rewardName, setRewardName] = useState('');
    const [rewardTarget, setRewardTarget] = useState('Distributor');
    const [rewardPrize, setRewardPrize] = useState('');
    const [rewardSales, setRewardSales] = useState(0);

    const [startDate, setStartDate] = useState('2019-01-01');
    const [endDate, setEndDate] = useState('2019-01-01');
    
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('00:00');
    
    const [rewardId, setRewardId] = useState('');
    const [updatemodals,setUpdateModals]=useState(false);
    const [viewmodals,setViewModals]=useState(false);

    const [reward, setReward] = useState([
        {
            id:1,
            rewardname:'Reward 1',
            rewardtarget:'Distributor',
            rewardprize:'Trip to South Korea',
            rewardsales:'2000000',
            startDateTime:'2020-10-01 08:00',
            startDate:'2020-10-01',
            startTime:'08:00',
            endDateTime:'2020-11-01 08:00',
            endDate:'2020-11-01',
            startTime:'08:00',
            status:'REMOVED'
        },
        {
            id:2,
            rewardname:'Reward 2',
            rewardtarget:'Reseller',
            rewardprize:'Trip to Japan',
            rewardsales:'2000000',
            startDateTime:'2020-10-01 08:00',
            startDate:'2020-10-01',
            startTime:'08:00',
            endDateTime:'2020-11-01 08:00',
            endDate:'2020-11-01',
            startTime:'08:00',
            status:'ACTIVE'
        }
    ]);

    return (
        <RewardContext.Provider 
        value={[
           rewardName,
           setRewardName,
           rewardTarget,
           setRewardTarget,
           rewardPrize,
           setRewardPrize,
           rewardSales,
           setRewardSales,
           rewardId, 
           setRewardId,
           startDate,
           setStartDate,
           startTime,
           setStartTime,
           endDate,
           setEndDate,
           endTime,
           setEndTime,
           updatemodals,
           setUpdateModals,
           viewmodals,
           setViewModals,
           reward, 
           setReward,
            ]}>
            {props.children}
        </RewardContext.Provider>
    );
}