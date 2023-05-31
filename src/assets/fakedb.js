import toast, { Toaster } from 'react-hot-toast';
// use local storage to manage applied data

const addToDb = id => {
    let appliedJobs = getappliedJobs();
    let notNewApplied = appliedJobs.find(data => data === id);
    if(notNewApplied){
        toast('Oops! Already applied.');
    }
    else {
        appliedJobs.push(id);
        localStorage.setItem('applied-job', JSON.stringify(appliedJobs));
        toast('Successfully applied.');
    }
    
}

const removeFromDb = id => {
    const appliedJobs = getappliedJobs();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('applied-job', JSON.stringify(appliedJobs));
    }
}

const getappliedJobs = () => {
    let appliedJobs = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-job');
    if (storedCart) {
        appliedJobs = JSON.parse(storedCart);
    }
    return appliedJobs;
}






export {
    addToDb,
    removeFromDb,
    getappliedJobs
}
