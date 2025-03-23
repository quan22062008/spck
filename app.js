// Dữ liệu demo công việc với ID duy nhất
const jobData = [
    { id: 1, title: "Nhân Viên Tư Vấn Bán Hàng Xe Ô Tô BMW", company: "Công ty Cổ phần Dịch vụ Vận tải ô tô số 8", location: "Hà Nội", type: "Bán thời gian", salary: "10 - 40 triệu", description: "Nhân sự đã có kinh nghiệm bán xe ô tô 6 tháng trở lên.", featured: true },

    { id: 2, title: "Nhân Viên Kinh Doanh Thị Trường - Kênh Horeca", company: "CHI NHÁNH CÔNG TY TNHH THỰC PHẨM TỐT LÀNH TẠI HÀ NỘI", location: "Hà Nội", type: "Toàn thời gian", salary: "15 - 20 triệu", description: "Có kinh nghiệm 06 tháng trở lên ở vị trí nhân viên kinh doanh", featured: false },

    { id: 3, title: " Nhân Viên Kinh Doanh - Lĩnh Vực PCCC", company: " CÔNG TY TNHH Thương Mại Xuất Nhập Khẩu D&C VINA", location: "Thành phố Hồ Chí Minh", type: "Bán thời gian", salary: "Thoả thuận", description: " Từ 2 năm kinh nghiệm trong lĩnh vực kinh doanh hoặc bán hàng kỹ thuật, ưu tiên có kinh nghiệm trong ngành thiết bị PCCC.", featured: true },

    { id: 4, title: "Chuyên Viên Tư Vấn Kinh Doanh Phần Mềm ERP ", company: " Công ty TNHH 1C Việt Nam", location: "Hà Nội", type: "Toàn thời gian", salary: "Thoả thuận", description: "Có ít nhất 03 năm kinh nghiệm ở vị trí Kinh doanh hoặc vị trí pre-sales hoặc các vị trí tương tự", featured: false },
    
    { id: 5, title: " Product Designer (UI/UX Designer)", company: "Công ty Cổ phần MISA    ", location: "Hà Nội", type: "Bán thời gian", salary: "Tới 1,500 USD", description: "Đã có kinh nghiệm tối thiểu 2 năm tham gia phát triển những sản phẩm về ERP, SaaS, quản lý, quản trị,.. ", featured: true },
    
    { id: 6, title: "Assistant Brand Manager (Marketing)", company: " Công Ty TNHH Công Nghệ Và Tư Vấn Hàn", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "Thoả thuận", description: "Experience: At least 2 years of experience in brand marketing or ecommerce management, preferably with established brands.", featured: false },
   
    { id: 7, title: " Kỹ Sư Cơ Khí - Nhà Máy Phân Bón", company: "CÔNG TY CỔ PHẦN PHÂN BÓN HÀ LAN    ", location: "Thành phố Hồ Chí Minh", type: "Bán thời gian", salary: "13 - 16 triệu", description: "Ít nhất 3 năm kinh nghiệm trong thiết kế/sửa chữa/bảo trì hệ thống thiết bị cơ khí, ưu tiên ứng viên đã làm trong nhà máy có dây chuyền sản xuất ", featured: true },
   
    { id: 8, title: "Nhân viên kinh doanh", company: "Công ty XYZ", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "15-25 triệu", description: "", featured: false },
  
    { id: 9, title: " kế đồ họa", company: "Công ty DEF", location: "Đà Nẵng", type: "Bán thời gian", salary: "10-15 triệu", description: " ", featured: true },
   
    { id: 10, title: "Nhân viên kinh doanh", company: "Công ty XYZ", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "15-25 triệu", description: "", featured: false },
  
    { id: 11, title: " kế đồ họa", company: "Công ty DEF", location: "Đà Nẵng", type: "Bán thời gian", salary: "10-15 triệu", description: " ", featured: true },
   
    { id: 12, title: "Nhân viên kinh doanh", company: "Công ty XYZ", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "15-25 triệu", description: "", featured: false },
 
    { id: 13, title: " kế đồ họa", company: "Công ty DEF", location: "Đà Nẵng", type: "Bán thời gian", salary: "10-15 triệu", description: " ", featured: true },
  
    { id: 14, title: "Nhân viên kinh doanh", company: "Công ty XYZ", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "15-25 triệu", description: "", featured: false },
   
    { id: 15, title: " kế đồ họa", company: "Công ty DEF", location: "Đà Nẵng", type: "Bán thời gian", salary: "10-15 triệu", description: " ", featured: true },
  
    { id: 16, title: "Nhân viên kinh doanh", company: "Công ty XYZ", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "15-25 triệu", description: "", featured: false },
  
    { id: 17, title: " kế đồ họa", company: "Công ty DEF", location: "Đà Nẵng", type: "Bán thời gian", salary: "10-15 triệu", description: " ", featured: true },
 
    { id: 18, title: "Nhân viên kinh doanh", company: "Công ty XYZ", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "15-25 triệu", description: "", featured: false },
  
    { id: 19, title: " kế đồ họa", company: "Công ty DEF", location: "Đà Nẵng", type: "Bán thời gian", salary: "10-15 triệu", description: " ", featured: true },
  
    { id: 20, title: "Nhân viên kinh doanh", company: "Công ty XYZ", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "15-25 triệu", description: "", featured: false },
   
    { id: 21, title: " kế đồ họa", company: "Công ty DEF", location: "Đà Nẵng", type: "Bán thời gian", salary: "10-15 triệu", description: " ", featured: true },
   
    { id: 22, title: "Nhân viên kinh doanh", company: "Công ty XYZ", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "15-25 triệu", description: "", featured: false },
  
    { id: 23, title: " kế đồ họa", company: "Công ty DEF", location: "Đà Nẵng", type: "Bán thời gian", salary: "10-15 triệu", description: " ", featured: true },
   
    { id: 24, title: "Nhân viên kinh doanh", company: "Công ty XYZ", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "15-25 triệu", description: "", featured: false },
  
    { id: 25, title: " kế đồ họa", company: "Công ty DEF", location: "Đà Nẵng", type: "Bán thời gian", salary: "10-15 triệu", description: " ", featured: true },
  
    { id: 26, title: "Nhân viên kinh doanh", company: "Công ty XYZ", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian", salary: "15-25 triệu", description: "", featured: false },
   
    { id: 27, title: " kế đồ họa", company: "Công ty DEF", location: "Đà Nẵng", type: "Bán thời gian", salary: "10-15 triệu", description: " ", featured: true },
   
    









];

// Dữ liệu demo công ty nổi bật
const companyData = [
    { name: "Công ty ABC", description: "Công nghệ hàng đầu", logo: "https://via.placeholder.com/100" },
    { name: "Công ty XYZ", description: "Kinh doanh sáng tạo", logo: "https://via.placeholder.com/100" },
    { name: "Công ty DEF", description: " kế chuyên nghiệp", logo: "https://via.placeholder.com/100" }
];

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

// Hiển thị danh sách công ty nổi bật
function displayCompanies() {
    const companyList = document.getElementById('companyList');
    companyList.innerHTML = '';

    companyData.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.className = 'company-card';
        companyCard.innerHTML = `
            <img src="${company.logo}" alt="${company.name}">
            <h3>${company.name}</h3>
            <p>${company.description}</p>
        `;
        companyList.appendChild(companyCard);
    });
}

// Tìm kiếm công việc
function searchJobs() {
    const keyword = document.getElementById('keyword').value.trim().toLowerCase();
    const location = document.getElementById('location').value.trim().toLowerCase();
    const jobType = document.getElementById('jobType').value.trim().toLowerCase();
    const selectedFilter = document.querySelector('.filter-btn.active')?.dataset.location || '';

    const filteredJobs = jobData.filter(job => {
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

// Hiển thị chi tiết công việc trong modal
function showJobDetail(jobId) {
    const job = jobData.find(j => j.id === jobId);
    const jobDetailContainer = document.getElementById('jobDetail');

    if (!job) {
        jobDetailContainer.innerHTML = '<p class="no-results">Không tìm thấy thông tin công việc.</p>';
        return;
    }

    // Thêm yêu cầu mẫu (có thể tùy chỉnh)
    const requirements = [
        "Kinh nghiệm 1-2 năm",
        "Kỹ năng lập trình cơ bản",
        "Làm việc nhóm tốt"
    ];

    

    jobDetailContainer.innerHTML = `
        <h1>${job.title}</h1>
        <p class="company">${job.company}</p>
        <div class="job-details">
            <span class="detail-item"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
            <span class="detail-item"><i class="fas fa-briefcase"></i> ${job.type}</span>
            <span class="detail-item"><i class="fas fa-money-bill-wave"></i> ${job.salary}</span>
        </div>
        <p class="description">${job.description}</p>
        <div class="requirements">
            <h3>Yêu Cầu</h3>
            <ul>
                ${requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
        <a href="#" class="apply-button">Ứng Tuyển Ngay</a>
    `;

    showModal('jobDetailModal');
}

// Khởi tạo hiển thị khi tải trang
window.onload = () => {
    // Hiển thị tất cả công việc
    displayJobs(jobData, 'jobListings');
    // Hiển thị công việc nổi bật
    const featuredJobs = jobData.filter(job => job.featured);
    displayJobs(featuredJobs, 'featuredJobs');
    // Hiển thị công ty nổi bật
    displayCompanies();
    //  lập sự kiện cho các nút lọc
    setupFilterButtons();
};