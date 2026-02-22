import { jobData } from "./job-data.js";
import { getElementById } from "./utils.js";

const jobCart = getElementById("js-jobs-cart");
const totalJob = getElementById("js-total-job");
const interviewJob = getElementById("js-interview-job");
const rejectedJob = getElementById("js-rejected-job");
const availableJobsTag = getElementById("js-available-jobs");

const renderAllJobs = () => {
    let allJobsHTML = '';

    jobData.forEach(job => {
        allJobsHTML += `
            <div
                class="relative border border-gray-200 rounded-xl p-5 sm:p-6 bg-white hover:shadow-md transition-shadow duration-200 mb-4">

                <!-- Delete Icon -->
                <button id="js-delete-job" class="absolute top-4 right-4 text-gray-300 hover:text-red-400 transition-colors duration-150">
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
    availableJobsTag.innerText = `${pendingCount} jobs`;
    interviewJob.innerText = interviewCount;
    rejectedJob.innerText = rejectedCount;

    jobCart.innerHTML = allJobsHTML;
}

renderAllJobs()

const handleInterview = (id) => {
    const targetJob = jobData.find(jobItem => jobItem.id === id);
    if (targetJob) {
        targetJob.status = "interview"
        console.log("Updated JOb", targetJob);

    }
    interviewJob.innerText = jobData.filter(job => job.status === "interview").length
    renderAllJobs()
}

const handleRejected = (id) => {
    const targetJob = jobData.find(jobItem => jobItem.id === id);
    if (targetJob) {
        targetJob.status = "rejected"
        console.log("Updated JOb", targetJob);

    }
    rejectedJob.innerText = jobData.filter(job => job.status === "rejected").length
    renderAllJobs()
}

window.handleInterview = handleInterview;
window.handleRejected = handleRejected;
