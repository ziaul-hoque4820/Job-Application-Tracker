import { jobData } from "./job-data.js";
import { getElementById } from "./utils.js";

const jobCart = getElementById("js-jobs-cart");
const totalJob = getElementById("js-total-job");
const interviewJob = getElementById("js-interview-job");
const rejectedJob = getElementById("js-rejected-job");
const availableJobsTag = getElementById("js-available-jobs");
const allJobFillter = getElementById("all-job");
const interviewJobFillter = getElementById("interview-job");
const rejectedJobFillter = getElementById("rejected-job");

let activeFilter = 'all';

const getFilterJobs = () => {
    if (activeFilter === 'interview') return jobData.filter(job => job.status === 'interview');
    if (activeFilter === 'rejected') return jobData.filter(job => job.status === 'rejected');
    return jobData;
}

const renderAllJobs = (jobs) => {
    let allJobsHTML = '';

    if (jobs.length == 0) {
        allJobsHTML = `
            <div class="flex flex-col items-center justify-center py-16 sm:py-24 gap-4">
                <div class="relative">
                    <img src="./assets/jobs.png" alt="jobs-icon">
                </div>

                <div class="text-center mt-2">
                    <p class="text-[#0a3d5c] font-bold text-lg sm:text-xl">No jobs available</p>
                    <p class="text-gray-400 text-sm sm:text-base mt-1">Check back soon for new job opportunities</p>
                </div>
            </div>
        `
    }

    jobs.forEach(job => {
        allJobsHTML += `
            <div
                class="relative border border-gray-200 rounded-xl p-5 sm:p-6 bg-white hover:shadow-md transition-shadow duration-200 mb-4">

                <!-- Delete Icon -->
                <button onClick="handleDelete(${job.id})" id="js-delete-job" class="absolute top-4 right-4 text-gray-300 hover:text-red-400 transition-colors duration-150">
                    <i class="fa-regular fa-trash-can text-base"></i>
                </button>

                <!-- Company & Role -->
                <div class="mb-2 pr-8">
                    <h3 class="text-base sm:text-lg font-bold text-gray-800">${job.companyName}</h3>
                    <p class="text-gray-500 text-sm sm:text-base">${job.position}</p>
                </div>

                <!-- Meta info -->
                <p class="text-gray-400 text-sm mb-4 flex flex-wrap items-center gap-1">
                    <span>${job.location}</span>
                    <span class="text-gray-300">•</span>
                    <span>${job.type}</span>
                    <span class="text-gray-300">•</span>
                    <span>${job.salary}</span>
                </p>

                <!-- Status Badge -->
                <div id="status-badge" class="mb-4">
                    <span
                        class="${`inline-block border ${job.status === 'pending' && "border-gray-300 text-gray-500 bg-gray-200"} ${job.status === 'interview' && "border-[#22c55e] text-[#22c55e] bg-green-100"} ${job.status === 'rejected' && "border-[#ef4444] text-[#ef4444] bg-red-100"}  text-xs font-semibold tracking-widest px-3 py-1.5 rounded-md uppercase`}">
                        ${job.status}
                    </span>
                </div>

                <!-- Description -->
                <p class="text-gray-500 text-sm sm:text-base mb-5 leading-relaxed">
                    ${job.description}
                </p>

                <!-- Action Buttons -->
                <div class="flex flex-wrap gap-3">
                    <button
                        onClick="handleInterview(${job.id})"
                        id="js-interview-btn"
                        class="border border-[#22c55e] text-[#22c55e] text-xs font-bold tracking-widest px-4 py-2 rounded-md uppercase hover:bg-green-50 transition-colors duration-150">
                        Interview
                    </button>
                    <button 
                        onClick="handleRejected(${job.id})"
                        id="js-rejected-btn"
                        class="border border-[#ef4444] text-[#ef4444] text-xs font-bold tracking-widest px-4 py-2 rounded-md uppercase hover:bg-red-50 transition-colors duration-150">
                        Rejected
                    </button>
                </div>

            </div>
        `

    })

    const totalCount = jobData.length;
    const pendingCount = jobData.filter(job => job.status === "pending").length;
    const interviewCount = jobData.filter(job => job.status === "interview").length;
    const rejectedCount = jobData.filter(job => job.status === "rejected").length;

    totalJob.innerText = totalCount;
    interviewJob.innerText = interviewCount;
    rejectedJob.innerText = rejectedCount;

    if (activeFilter === 'interview') {
        availableJobsTag.innerText = `${jobs.length} jobs`;
    } else if (activeFilter === 'rejected') {
        availableJobsTag.innerText = `${jobs.length} jobs`;
    } else {
        availableJobsTag.innerText = `${jobData.filter(job => job.status === "pending").length} jobs`;
    }

    jobCart.innerHTML = allJobsHTML;
}

renderAllJobs(jobData);

const handleInterview = (id) => {
    const targetJob = jobData.find(jobItem => jobItem.id === id);
    if (targetJob) {
        targetJob.status = "interview"
        console.log("Updated JOb", targetJob);
    }
    renderAllJobs(getFilterJobs());
}

const handleRejected = (id) => {
    const targetJob = jobData.find(jobItem => jobItem.id === id);
    if (targetJob) {
        targetJob.status = "rejected"
        console.log("Updated JOb", targetJob);

    }
    renderAllJobs(getFilterJobs())
}

const handleDelete = (id) => {
    const index = jobData.findIndex(job => job.id === id);
    if (index !== -1) jobData.splice(index, 1);
    renderAllJobs(getFilterJobs());
}

window.handleInterview = handleInterview;
window.handleRejected = handleRejected;
window.handleDelete = handleDelete;

allJobFillter.addEventListener('click', () => {
    activeFilter = 'all';
    renderAllJobs(getFilterJobs());
});

interviewJobFillter.addEventListener('click', () => {
    activeFilter = 'interview'
    renderAllJobs(getFilterJobs());
})

rejectedJobFillter.addEventListener('click', () => {
    activeFilter = 'rejected'
    renderAllJobs(getFilterJobs());
})