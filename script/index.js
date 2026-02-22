import { jobData } from "./job-data.js";
import { getElementById} from "./utils.js";

const jobCart = getElementById("js-jobs-cart");
const totalJob = getElementById("js-total-job");
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
                        class="inline-block border border-gray-300 text-gray-500 bg-gray-200 text-xs font-semibold tracking-widest px-3 py-1.5 rounded-md uppercase">
                        ${job.status}
                    </span>
                </div>

                <!-- Description -->
                <p class="text-gray-500 text-sm sm:text-base mb-5 leading-relaxed">
                    ${job.description}
                </p>

                <!-- Action Buttons -->
                <div class="flex flex-wrap gap-3">
                    <button id="js-interview-btn"
                        class="border border-[#22c55e] text-[#22c55e] text-xs font-bold tracking-widest px-4 py-2 rounded-md uppercase hover:bg-green-50 transition-colors duration-150">
                        Interview
                    </button>
                    <button id="js-rejected-btn"
                        class="border border-[#ef4444] text-[#ef4444] text-xs font-bold tracking-widest px-4 py-2 rounded-md uppercase hover:bg-red-50 transition-colors duration-150">
                        Rejected
                    </button>
                </div>

            </div>
        `

    })
    
    const availableJobs = jobData.filter(job => job.status === "pending");
    
    totalJob.innerText = jobData.length;
    availableJobsTag.innerText = `${availableJobs.length} jobs`
    jobCart.innerHTML = allJobsHTML;
}

renderAllJobs()