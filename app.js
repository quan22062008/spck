// Dữ liệu demo công việc với ID duy nhất
const jobData = [
    { 
        id: 1, 
        title: "Nhân Viên Tư Vấn Bán Hàng Xe Ô Tô BMW", 
        company: "Công ty Cổ phần Dịch vụ Vận tải ô tô số 8", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "10 - 40 triệu", 
        description: "Nhân sự đã có kinh nghiệm bán xe ô tô 6 tháng trở lên.", 
        featured: false,
        requirements: [
            "Có kinh nghiệm bán xe ô tô từ 6 tháng trở lên",
            "Kỹ năng giao tiếp và đàm phán tốt",
            "Ưu tiên ứng viên có hiểu biết về thương hiệu BMW"
        ]
    },
    { 
        id: 2, 
        title: "Nhân Viên Kinh Doanh Thị Trường - Kênh Horeca", 
        company: "CHI NHÁNH CÔNG TY TNHH THỰC PHẨM TỐT LÀNH TẠI HÀ NỘI", 
        location: "Hà Nội", 
        type: "Toàn thời gian", 
        salary: "15 - 20 triệu", 
        description: "Có kinh nghiệm 06 tháng trở lên ở vị trí nhân viên kinh doanh", 
        featured: false,
        requirements: [
            "Có kinh nghiệm từ 6 tháng trở lên ở vị trí nhân viên kinh doanh",
            "Hiểu biết về kênh Horeca (khách sạn, nhà hàng, quán cà phê)",
            "Kỹ năng giao tiếp và xây dựng mối quan hệ tốt"
        ]
    },
    { 
        id: 3, 
        title: "Nhân Viên Kinh Doanh - Lĩnh Vực PCCC", 
        company: "CÔNG TY TNHH Thương Mại Xuất Nhập Khẩu D&C VINA", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Bán thời gian", 
        salary: "Thoả thuận", 
        description: "Từ 2 năm kinh nghiệm trong lĩnh vực kinh doanh hoặc bán hàng kỹ thuật, ưu tiên có kinh nghiệm trong ngành thiết bị PCCC.", 
        featured: false,
        requirements: [
            "Có từ 2 năm kinh nghiệm trong kinh doanh hoặc bán hàng kỹ thuật",
            "Ưu tiên ứng viên có kinh nghiệm trong ngành thiết bị PCCC",
            "Kỹ năng đàm phán và thuyết phục khách hàng"
        ]
    },
    { 
        id: 4, 
        title: "Chuyên Viên Tư Vấn Kinh Doanh Phần Mềm ERP", 
        company: "Công ty TNHH 1C Việt Nam", 
        location: "Hà Nội", 
        type: "Toàn thời gian", 
        salary: "Thoả thuận", 
        description: "Có ít nhất 03 năm kinh nghiệm ở vị trí Kinh doanh hoặc vị trí pre-sales hoặc các vị trí tương tự", 
        featured: false,
        requirements: [
            "Có ít nhất 3 năm kinh nghiệm ở vị trí kinh doanh hoặc pre-sales",
            "Hiểu biết về phần mềm ERP",
            "Kỹ năng tư vấn và giải quyết vấn đề"
        ]
    },
    { 
        id: 5, 
        title: "Product Designer (UI/UX Designer)", 
        company: "Công ty Cổ phần MISA", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "Tới 1,500 USD", 
        description: "Đã có kinh nghiệm tối thiểu 2 năm tham gia phát triển những sản phẩm về ERP, SaaS, quản lý, quản trị,..", 
        featured: false,
        requirements: [
            "Có ít nhất 2 năm kinh nghiệm phát triển sản phẩm ERP, SaaS, quản lý, quản trị",
            "Thành thạo các công cụ thiết kế UI/UX (Figma, Sketch, Adobe XD)",
            "Kỹ năng giao tiếp và làm việc nhóm tốt"
        ]
    },
    { 
        id: 6, 
        title: "Assistant Brand Manager (Marketing)", 
        company: "Công Ty TNHH Công Nghệ Và Tư Vấn Hàn", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "Thoả thuận", 
        description: "Experience: At least 2 years of experience in brand marketing or ecommerce management, preferably with established brands.", 
        featured: false,
        requirements: [
            "Có ít nhất 2 năm kinh nghiệm trong marketing thương hiệu hoặc quản lý thương mại điện tử",
            "Ưu tiên ứng viên đã làm việc với các thương hiệu lớn",
            "Kỹ năng phân tích và lập kế hoạch marketing"
        ]
    },
    { 
        id: 7, 
        title: "Kỹ Sư Cơ Khí - Nhà Máy Phân Bón", 
        company: "CÔNG TY CỔ PHẦN PHÂN BÓN HÀ LAN", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Bán thời gian", 
        salary: "13 - 16 triệu", 
        description: "Ít nhất 3 năm kinh nghiệm trong thiết kế/sửa chữa/bảo trì hệ thống thiết bị cơ khí, ưu tiên ứng viên đã làm trong nhà máy có dây chuyền sản xuất", 
        featured: false,
        requirements: [
            "Có ít nhất 3 năm kinh nghiệm trong thiết kế, sửa chữa, bảo trì thiết bị cơ khí",
            "Ưu tiên ứng viên đã làm việc trong nhà máy có dây chuyền sản xuất",
            "Hiểu biết về an toàn lao động và quy trình sản xuất"
        ]
    },
    { 
        id: 8, 
        title: "Trưởng Nhóm Kinh Doanh", 
        company: "AIA EXCHANGE - HỒ CHÍ MINH", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "30 - 50 triệu", 
        description: "Có kinh nghiệm ít nhất 1 năm làm quản lý. Đặc biệt ưu tiên ứng viên có kinh nghiệm quản lý đội ngũ bán hàng.", 
        featured: false,
        requirements: [
            "Có ít nhất 1 năm kinh nghiệm làm quản lý",
            "Ưu tiên ứng viên có kinh nghiệm quản lý đội ngũ bán hàng",
            "Kỹ năng lãnh đạo và giải quyết vấn đề"
        ]
    },
    { 
        id: 9, 
        title: "Trade Marketing (Livestream)", 
        company: "CÔNG TY TNHH DƯỢC SOLECHILD", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "12 - 15 triệu", 
        description: "Tốt nghiệp cao đẳng trở lên các nghành Y, Dược, Kinh Tế,....", 
        featured: false,
        requirements: [
            "Tốt nghiệp cao đẳng trở lên các ngành Y, Dược, Kinh tế",
            "Có kinh nghiệm về trade marketing hoặc livestream là một lợi thế",
            "Kỹ năng tổ chức và sáng tạo nội dung"
        ]
    },
    { 
        id: 10, 
        title: "Chuyên Viên Hạ Tầng (System Administrator)", 
        company: "Công ty TNHH Phần mềm và Dịch vụ công nghệ STS", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "Thoả thuận", 
        description: "Tối thiểu 2 năm kinh nghiệm làm tư vấn giải pháp về Mạng và Bảo mật hoặc Tối thiểu 2 năm làm triển khai về Mạng và Bảo mật.", 
        featured: false,
        requirements: [
            "Có ít nhất 2 năm kinh nghiệm tư vấn giải pháp hoặc triển khai về Mạng và Bảo mật",
            "Hiểu biết sâu về hệ thống hạ tầng CNTT",
            "Kỹ năng phân tích và xử lý sự cố"
        ]
    },
    { 
        id: 11, 
        title: "IT Comtor (Japanese) - Fresher Accepted", 
        company: "CÔNG TY TNHH HOPEE", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Bán thời gian", 
        salary: "Thoả thuận", 
        description: "Không yêu cầu", 
        featured: false,
        requirements: [
            "Biết tiếng Nhật (tương đương N3 trở lên)",
            "Ưu tiên ứng viên có hiểu biết về CNTT",
            "Kỹ năng giao tiếp và dịch thuật tốt"
        ]
    },
    { 
        id: 12, 
        title: "Senior Customer Service Coordinator", 
        company: "Công ty TNHH Thiết kế Thương mại DLS", 
        location: "Hà Nội", 
        type: "Toàn thời gian", 
        salary: "Thoả thuận", 
        description: "2+ years of experience in customer service, preferably in e-commerce or a multi-channel support environment.", 
        featured: false,
        requirements: [
            "Có ít nhất 2 năm kinh nghiệm trong dịch vụ khách hàng",
            "Ưu tiên ứng viên đã làm việc trong môi trường thương mại điện tử",
            "Kỹ năng giao tiếp và giải quyết vấn đề"
        ]
    },
    { 
        id: 13, 
        title: "Quản Lý Kinh Doanh OTC", 
        company: "Công ty TNHH MTV Khỏe đẹp bền vững", 
        location: "Hà Nội", 
        type: "Toàn thời gian", 
        salary: "Thoả thuận", 
        description: "Có kinh nghiệm ít nhất 2 năm quản lý kênh OTC.", 
        featured: false,
        requirements: [
            "Có ít nhất 2 năm kinh nghiệm quản lý kênh OTC",
            "Hiểu biết về thị trường dược phẩm",
            "Kỹ năng lãnh đạo và lập kế hoạch"
        ]
    },
    { 
        id: 14, 
        title: "Trưởng Phòng Kinh Doanh", 
        company: "CHI NHÁNH CÔNG TRÌNH VIETTEL BÌNH DƯƠNG - TỔNG CÔNG TY CỔ PHẦN CÔNG TRÌNH VIETTEL", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "10 - 30 triệu", 
        description: "Tốt nghiệp Đại học trở lên chuyên ngành Kinh tế Kỹ thuật, Công nghệ thông tin, Cơ điện, Điện tử viễn thông,...", 
        featured: false,
        requirements: [
            "Tốt nghiệp Đại học trở lên chuyên ngành Kinh tế Kỹ thuật, CNTT, Cơ điện, Điện tử viễn thông",
            "Có kinh nghiệm quản lý kinh doanh từ 3 năm trở lên",
            "Kỹ năng lãnh đạo và đàm phán"
        ]
    },
    { 
        id: 15, 
        title: "Trưởng Phòng Sản Phẩm (R&D) / Phát Triển Tour & Tính Giá Tour", 
        company: "CÔNG TY TNHH VIETRANTOUR", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "25 - 30 triệu", 
        description: "Ít nhất 3-5 năm kinh nghiệm trong ngành du lịch, trong đó có kinh nghiệm ở vị trí quản lý sản phẩm/tour.", 
        featured: false,
        requirements: [
            "Có 3-5 năm kinh nghiệm trong ngành du lịch",
            "Có kinh nghiệm ở vị trí quản lý sản phẩm/tour",
            "Kỹ năng nghiên cứu và phát triển sản phẩm du lịch"
        ]
    },
    { 
        id: 16, 
        title: "Giám Đốc Dự Án Bất Động Sản", 
        company: "CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN WON HOMES", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "20 - 50 triệu", 
        description: "Có ít nhất 1 năm kinh nghiệm ở vị trí tương đương trong lĩnh vực BĐS.", 
        featured: false,
        requirements: [
            "Có ít nhất 1 năm kinh nghiệm ở vị trí giám đốc dự án BĐS",
            "Hiểu biết sâu về thị trường bất động sản",
            "Kỹ năng quản lý dự án và lãnh đạo"
        ]
    },
    { 
        id: 17, 
        title: "Phó Giám Đốc Phụ Trách Kinh Doanh ", 
        company: "Công ty cổ phần Vật liệu Xây dựng Huy Hùng", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "35 - 100 triệu", 
        description: " Có 2 năm kinh nghiệm kinh doanh trong lĩnh vực thương mại vận tải", 
        featured: false,
        requirements: [
            "Có kinh nghiệm kinh doanh trong lĩnh vực thương mại vận tải",
            "Am hiểu thị trường vật tư vật liệu trên địa bàn tỉnh Hà Nội",
            "Sử dụng máy tính thành thạo, biết làm các báo cáo liên quan đến lĩnh vực phụ trách"
        ]
    },
    { 
        id: 18, 
        title: "Nhân Viên Kinh Doanh/Sale/Tư Vấn Cho Thuê Nhà Phố", 
        company: " CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN GIGAREAL", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "20 - 100 triệu", 
        description: "Không yêu cầu kinh nghiệm về bất động sản, được đào tạo từ đầu.", 
        featured: false,
        requirements: [
            "Siêng năng, chăm chỉ, nhiệt tình, ham học hỏi, chủ động, có tinh thần cầu tiến.",
            "Đam mê kinh doanh và kiếm tiền, kỹ năng giao tiếp tốt.",
        ]
    },
    { 
        id: 19, 
        title: "Trưởng Phòng Kinh Doanh ", 
        company: "CÔNG TY CỔ PHẦN TM&DV BẤT ĐỘNG SẢN AN VƯỢNG LAND", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
            salary: "80 - 100 triệu", 
            description: "Có ít nhất 03 năm kinh nghiệm bán hàng trong lĩnh vực BĐS, ít nhất 01 năm kinh nghiệm làm trưởng nhóm bán hàng trở lên.", 
        featured: false,
        requirements: [
            "Hiểu biết về kinh doanh BĐS",
            "Sử dụng được các phần mềm tiện ích văn phòng",
        ]
    },
    { 
        id: 20, 
        title: "Trưởng Nhóm Dịch Vụ Khách Hàng ", 
        company: "Công ty chuyển phát nhanh Thuận Phong chi nhánh Hồ Chí Minh (J&T Express)        ", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "20 - 25 triệu", 
        description: "ó ít nhất 1 năm kinh nghiệm ở vị trí tương đương hoặc 2 năm kinh nghiệm ở vị trí Phó Nhóm (Ưu tiên công việc liên quan quản lý telesales, tư vấn, giải quyết khiếu nại)", 
        featured: false,
        requirements: [
            "Có kỹ năng lập kế hoạch, tổ chức",
            "Có kĩ năng phân tích, tổng hợp, báo cáo công việc",
            "Giao tiếp Tiếng Trung là một lợi thế"
        ]
    },
    { 
        id: 21, 
        title: "Nhân Viên Quản Lý Hồ Sơ         ", 
        company: "CÔNG TY CỔ PHẦN TẬP ĐOÀN MASTERISE", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "13 - 15 triệu", 
        description: "Tối thiểu 2 năm kinh nghiệm tại vị trí liên quan", 
        featured: false,
        requirements: [
            "Cử nhân Kinh tế, Chính sách công, Văn thư lưu trữ",
            "Hiểu biết về công nghệ lưu trữ",
            "Năng lực chỉnh lý tài liệu"
        ]
    },
    { 
        id: 22, 
        title: "Nhân Viên Tư Vấn, Sales, Bán Hàng, Chăm Sóc Khách Hàng ", 
        company: "CÔNG TY CỔ PHẦN PHÁT TRIỂN NHÀ VẠN PHƯỚC", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "40 - 100 triệu", 
        description: " Nam/Nữ 20-30 tuổi", 
        featured: false,
        requirements: [
            "Môi trường làm việc năng động, văn hóa GenZ rất phù hợp cho các bạn mới ra Trường",
            "Chăm chỉ, có tinh thần cầu tiến.",
            "Yêu kinh doanh, thích kiếm tiền"
        ]
    },
    { 
        id: 23, 
        title: "Tư Vấn Bán Hàng Xe Ô Tô", 
        company: "CÔNG TY CỔ PHẦN DỊCH VỤ Ô TÔ BẾN THÀNH", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Bán thời gian", 
        salary: "30 - 40 triệu", 
        description: "Tốt nghiệp Trung cấp trở lên. Ưu tiên các ngành Kinh tế, Quản trị kinh doanh hoặc các ngành liên quan.", 
        featured: false,
        requirements: [
            "Đam mê và yêu thích công việc bán hàng. Có kinh nghiệm bán hàng là một lợi thế.",
            "Sử dụng thành thạo máy tính và các phần mềm tin học văn phòng",
            "Ngoại hình ưa nhìn, tác phong lịch sự, giao tiếp lịch thiệp."
        ]
    },
    { 
        id: 24, 
        title: "Nhân Viên Tester", 
        company: "CÔNG TY CỔ PHẦN APZON IRS VIỆT NAM", 
        location: "Hà Nội", 
        type: "Toàn thời gian", 
        salary: "8 - 15 triệu", 
        description: "Có kinh nghiệm kiểm thử phần mềm quản lý/ quản trị doanh nghiệp", 
        featured: false,
        requirements: [
            "Tốt nghiệp đại học chuyên ngành KHMT, CNTT",
            "Có kinh nghiệm trong lĩnh vực kiểm thử phần mềm",
            " Kiến thức về CI/CD, GIT."
        ]
    },
    { 
        id: 25, 
        title: "Kế đồ họa", 
        company: "Công ty DEF", 
        location: "Đà Nẵng", 
        type: "Bán thời gian", 
        salary: "10-15 triệu", 
        description: "", 
        featured: false,
        requirements: [
            "Có kinh nghiệm thiết kế đồ họa từ 1 năm trở lên",
            "Thành thạo các phần mềm thiết kế (Photoshop, Illustrator)",
            "Sáng tạo và có khả năng làm việc độc lập"
        ]
    },
    { 
        id: 26, 
        title: "Nhân viên kinh doanh", 
        company: "Công ty XYZ", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "15-25 triệu", 
        description: "", 
        featured: false,
        requirements: [
            "Có kinh nghiệm kinh doanh từ 1 năm trở lên",
            "Kỹ năng giao tiếp và đàm phán tốt",
            "Ưu tiên ứng viên có kinh nghiệm trong ngành bán lẻ"
        ]
    },
    { 
        id: 27, 
        title: "Kế đồ họa", 
        company: "Công ty DEF", 
        location: "Đà Nẵng", 
        type: "Bán thời gian", 
        salary: "10-15 triệu", 
        description: "", 
        featured: false,
        requirements: [
            "Có kinh nghiệm thiết kế đồ họa từ 1 năm trở lên",
            "Thành thạo các phần mềm thiết kế (Photoshop, Illustrator)",
            "Sáng tạo và có khả năng làm việc độc lập"
        ]
    }
];

// Dữ liệu demo công ty nổi bật
const companyData = [
    { name: "Công ty ABC", description: "Công nghệ hàng đầu", logo: "https://via.placeholder.com/100" },
    { name: "Công ty XYZ", description: "Kinh doanh sáng tạo", logo: "https://via.placeholder.com/100" },
    { name: "Công ty DEF", description: "Thiết kế chuyên nghiệp", logo: "https://via.placeholder.com/100" }
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

// Hiển thị chi tiết công việc trong modal
function showJobDetail(jobId) {
    const job = jobData.find(j => j.id === jobId);
    const jobDetailContainer = document.getElementById('jobDetail');

    if (!job) {
        jobDetailContainer.innerHTML = '<p class="no-results">Không tìm thấy thông tin công việc.</p>';
        return;
    }

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

// Khởi tạo hiển thị khi tải trang
window.onload = () => {
    // Hiển thị tất cả công việc
    displayJobs(jobData, 'jobListings');
    // Hiển thị công việc nổi bật
    const featuredJobs = jobData.filter(job => job.featured);
    displayJobs(featuredJobs, 'featuredJobs');
    // Hiển thị công ty nổi bật
    displayCompanies();
    // Thiết lập sự kiện cho các nút lọc
    setupFilterButtons();
};