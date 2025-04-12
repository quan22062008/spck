// Dữ liệu demo công ty nổi bật (giữ nguyên vì không liên quan đến API jobs)
const companyData = [
    { name: "Công ty cổ phần đầu tư Phát triển Máy Việt Nam", description: "Chuyên về thiết bị công nghiệp" },
    { name: "Công ty Cổ phần Kỹ nghệ Thực phẩm Việt Nam", description: "Kinh doanh sáng tạo" },
    { name: "CÔNG TY CỔ PHẦN DNP HOLDING", description: "Thiết kế chuyên nghiệp" },
    { name: "Công ty Cổ phần MISA", description: "Phần mềm quản lý doanh nghiệp" },
    { name: "Công ty TNHH 1C Việt Nam", description: "Giải pháp ERP hàng đầu" },
    { name: "AIA EXCHANGE", description: "Dịch vụ tài chính chuyên nghiệp" },
    { name: "Công ty TNHH Dược Solechild", description: "Ngành dược phẩm sáng tạo" },
    { name: "Công ty TNHH Phần mềm STS", description: "Dịch vụ công nghệ thông tin" },
    { name: "Công ty TNHH HOPEE", description: "Công nghệ và dịch vụ Nhật Bản" },
    { name: "Công ty TNHH Thiết kế DLS", description: "Thiết kế thương mại hiện đại" },
    { name: "Công ty TNHH Vietrantour", description: "Du lịch và phát triển tour" },
    { name: "Công ty Cổ phần Bất động sản Won Homes", description: "Bất động sản uy tín" },
    { name: "NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN QUÂN ĐỘI", description: "Sản phẩm Khách hàng Doanh nghiệp Vừa và Nhỏ" },
    { name: "Công Ty Tài Chính Cổ Phần Điện Lực EVN", description: "Chuyên Viên Ban Pháp Chế" },
    { name: "Viettel Digital", description: "Java Team Leader - Domain Tài Chính Số" }
];

// Hàm lấy dữ liệu từ API
async function fetchJobs() {
    try {
        const response = await fetch('https://67f2345cec56ec1a36d26a02.mockapi.io/jobs');
        if (!response.ok) throw new Error('Không thể lấy dữ liệu từ API');
        const jobs = await response.json();
        return jobs;
    } catch (error) {
        console.error('Lỗi khi fetch dữ liệu:', error);
        return [];
    }
}

// Hiển thị danh sách công việc
function displayJobs(jobs, elementId) {
    const jobListings = document.getElementById(elementId);
    jobListings.innerHTML = '';
    
    if (jobs.length === 0) {
        jobListings.innerHTML = '<p class="no-results">Không tìm thấy công việc nào phù hợp.</p>';
        return;
    }

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>
            <div class="job-details">
                <span class="detail-item"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span class="detail-item"><i class="fas fa-briefcase"></i> ${job.type}</span>
                <span class="detail-item"><i class="fas fa-money-bill-wave"></i> ${job.salary}</span>
            </div>
            <p class="description">${job.description}</p>
            <button class="btn btn-apply" onclick="showJobDetail(${job.id})">Ứng Tuyển Ngay</button>
        `;
        jobListings.appendChild(jobCard);
    });
}

// Hiển thị chi tiết công việc trong modal
async function showJobDetail(jobId) {
    const jobs = await fetchJobs();
    const job = jobs.find(j => j.id == jobId); // Chuyển id thành string nếu API trả về string
    const jobDetailContainer = document.getElementById('jobDetail');

    if (!job) {
        jobDetailContainer.innerHTML = '<p class="no-results">Không tìm thấy thông tin công việc.</p>';
        return;
    }

    jobDetailContainer.innerHTML = `
        <div class="job-header">
            <h1>${job.title}</h1>
            <p class="company">${job.company}</p>
        </div>
        <div class="job-details">
            <span class="detail-item"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
            <span class="detail-item"><i class="fas fa-briefcase"></i> ${job.type}</span>
            <span class="detail-item"><i class="fas fa-money-bill-wave"></i> ${job.salary}</span>
        </div>
        <div class="description">
            <h3>Mô Tả Công Việc</h3>
            <p>${job.description}</p>
        </div>
        <div class="requirements">
            <h3>Yêu Cầu</h3>
            <ul>
                ${job.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
        <a href="job.html?id=${job.id}" class="apply-button">Ứng Tuyển Ngay</a>
    `;

    showModal('jobDetailModal');
}

// Hiển thị danh sách công ty nổi bật
function displayCompanies() {
    const companyList = document.getElementById('companyList');
    companyList.innerHTML = '';

    companyData.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.className = 'company-card';
        companyCard.innerHTML = `
            <h3>${company.name}</h3>
            <p>${company.description}</p>
        `;
        companyList.appendChild(companyCard);
    });
}

// Tìm kiếm công việc
async function searchJobs() {
    const jobs = await fetchJobs();
    const keyword = document.getElementById('keyword').value.trim().toLowerCase();
    const location = document.getElementById('location').value.trim().toLowerCase();
    const jobType = document.getElementById('jobType').value.trim().toLowerCase();
    const selectedFilter = document.querySelector('.filter-btn.active')?.dataset.location || '';

    const filteredJobs = jobs.filter(job => {
        const matchesKeyword = keyword === '' || 
            job.title.toLowerCase().includes(keyword) || 
            job.company.toLowerCase().includes(keyword) || 
            job.description.toLowerCase().includes(keyword);
        
        const matchesLocation = selectedFilter === '' || 
            (selectedFilter === 'mienbac' && ['Hà Nội', 'Đà Nẵng'].includes(job.location)) || 
            (selectedFilter === 'miennam' && job.location === 'Thành phố Hồ Chí Minh') || 
            job.location.toLowerCase() === selectedFilter;
        
        const matchesJobType = jobType === '' || job.type.toLowerCase() === jobType;

        return matchesKeyword && matchesLocation && matchesJobType;
    });

    displayJobs(filteredJobs, 'jobListings');
}

// Xử lý sự kiện khi nhấp vào nút lọc địa điểm
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            searchJobs();
        });
    });
}

// Hiển thị modal
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Đóng modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Khởi tạo hiển thị khi tải trang
window.onload = async () => {
    const jobs = await fetchJobs();
    // Hiển thị tất cả công việc
    displayJobs(jobs, 'jobListings');
    // Hiển thị công việc nổi bật
    const featuredJobs = jobs.filter(job => job.featured);
    displayJobs(featuredJobs, 'featuredJobs');
    // Hiển thị công ty nổi bật
    displayCompanies();
    // Thiết lập sự kiện cho các nút lọc
    setupFilterButtons();
};