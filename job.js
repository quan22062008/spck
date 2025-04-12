// Dữ liệu công việc (sao chép từ script.js của trang chính)
const jobData = [
    { 
        id: 1, 
        title: "Nhân Viên Tư Vấn Bán Hàng Xe Ô Tô BMW", 
        company: "Công ty Cổ phần Dịch vụ Vận tải ô tô số 8", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "10 - 40 triệu", 
        description: "Nhân sự đã có kinh nghiệm bán xe ô tô 6 tháng trở lên.", 
        featured: true,
        requirements: [
            "Có kinh nghiệm bán xe ô tô từ 6 tháng trở lên",
            "Kỹ năng giao tiếp và đàm phán tốt",
            "Ưu tiên ứng viên có hiểu biết về thương hiệu BMW"
        ],
        benefits: [
            "Lương thưởng cạnh tranh",
            "Đào tạo chuyên sâu về sản phẩm",
            "Môi trường làm việc chuyên nghiệp"
        ],
        postedDate: "2025-03-20",
        deadline: "2025-04-20"
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
        ],
        benefits: [
            "Thưởng doanh số hấp dẫn",
            "Hỗ trợ chi phí đi lại",
            "Bảo hiểm đầy đủ"
        ],
        postedDate: "2025-03-15",
        deadline: "2025-04-15"
    },
    { 
        id: 3, 
        title: "Nhân Viên Kinh Doanh - Lĩnh Vực PCCC", 
        company: "CÔNG TY TNHH Thương Mại Xuất Nhập Khẩu D&C VINA", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Bán thời gian", 
        salary: "Thoả thuận", 
        description: "Từ 2 năm kinh nghiệm trong lĩnh vực kinh doanh hoặc bán hàng kỹ thuật, ưu tiên có kinh nghiệm trong ngành thiết bị PCCC.", 
        featured: true,
        requirements: [
            "Có từ 2 năm kinh nghiệm trong kinh doanh hoặc bán hàng kỹ thuật",
            "Ưu tiên ứng viên có kinh nghiệm trong ngành thiết bị PCCC",
            "Kỹ năng đàm phán và thuyết phục khách hàng"
        ],
        benefits: [
            "Môi trường làm việc năng động",
            "Hỗ trợ đào tạo chuyên môn",
            "Thưởng dự án"
        ],
        postedDate: "2025-03-10",
        deadline: "2025-04-10"
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
        ],
        benefits: [
            "Lương thưởng cạnh tranh",
            "Cơ hội thăng tiến",
            "Đào tạo chuyên sâu"
        ],
        postedDate: "2025-03-12",
        deadline: "2025-04-12"
    },
    { 
        id: 5, 
        title: "Product Designer (UI/UX Designer)", 
        company: "Công ty Cổ phần MISA", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "Tới 1,500 USD", 
        description: "Đã có kinh nghiệm tối thiểu 2 năm tham gia phát triển những sản phẩm về ERP, SaaS, quản lý, quản trị,..", 
        featured: true,
        requirements: [
            "Có ít nhất 2 năm kinh nghiệm phát triển sản phẩm ERP, SaaS, quản lý, quản trị",
            "Thành thạo các công cụ thiết kế UI/UX (Figma, Sketch, Adobe XD)",
            "Kỹ năng giao tiếp và làm việc nhóm tốt"
        ],
        benefits: [
            "Môi trường sáng tạo",
            "Hỗ trợ thiết bị làm việc",
            "Tham gia các dự án lớn"
        ],
        postedDate: "2025-03-18",
        deadline: "2025-04-18"
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
        ],
        benefits: [
            "Thưởng hiệu suất",
            "Cơ hội học hỏi từ các chuyên gia",
            "Môi trường làm việc quốc tế"
        ],
        postedDate: "2025-03-05",
        deadline: "2025-04-05"
    },
    { 
        id: 7, 
        title: "Kỹ Sư Cơ Khí - Nhà Máy Phân Bón", 
        company: "CÔNG TY CỔ PHẦN PHÂN BÓN HÀ LAN", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Bán thời gian", 
        salary: "13 - 16 triệu", 
        description: "Ít nhất 3 năm kinh nghiệm trong thiết kế/sửa chữa/bảo trì hệ thống thiết bị cơ khí, ưu tiên ứng viên đã làm trong nhà máy có dây chuyền sản xuất", 
        featured: true,
        requirements: [
            "Có ít nhất 3 năm kinh nghiệm trong thiết kế, sửa chữa, bảo trì thiết bị cơ khí",
            "Ưu tiên ứng viên đã làm việc trong nhà máy có dây chuyền sản xuất",
            "Hiểu biết về an toàn lao động và quy trình sản xuất"
        ],
        benefits: [
            "Bảo hiểm đầy đủ",
            "Hỗ trợ ăn trưa",
            "Thưởng cuối năm"
        ],
        postedDate: "2025-03-08",
        deadline: "2025-04-08"
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
        ],
        benefits: [
            "Thưởng doanh số cao",
            "Cơ hội thăng tiến",
            "Hỗ trợ đào tạo"
        ],
        postedDate: "2025-03-01",
        deadline: "2025-04-01"
    },
    { 
        id: 9, 
        title: "Trade Marketing (Livestream)", 
        company: "CÔNG TY TNHH DƯỢC SOLECHILD", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "12 - 15 triệu", 
        description: "Tốt nghiệp cao đẳng trở lên các nghành Y, Dược, Kinh Tế,....", 
        featured: true,
        requirements: [
            "Tốt nghiệp cao đẳng trở lên các ngành Y, Dược, Kinh tế",
            "Có kinh nghiệm về trade marketing hoặc livestream là một lợi thế",
            "Kỹ năng tổ chức và sáng tạo nội dung"
        ],
        benefits: [
            "Thưởng theo dự án",
            "Hỗ trợ chi phí livestream",
            "Môi trường làm việc năng động"
        ],
        postedDate: "2025-03-03",
        deadline: "2025-04-03"
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
        ],
        benefits: [
            "Hỗ trợ chi phí đào tạo",
            "Môi trường làm việc chuyên nghiệp",
            "Thưởng dự án"
        ],
        postedDate: "2025-03-07",
        deadline: "2025-04-07"
    },
    { 
        id: 11, 
        title: "IT Comtor (Japanese) - Fresher Accepted", 
        company: "CÔNG TY TNHH HOPEE", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Bán thời gian", 
        salary: "Thoả thuận", 
        description: "Không yêu cầu", 
        featured: true,
        requirements: [
            "Biết tiếng Nhật (tương đương N3 trở lên)",
            "Ưu tiên ứng viên có hiểu biết về CNTT",
            "Kỹ năng giao tiếp và dịch thuật tốt"
        ],
        benefits: [
            "Hỗ trợ học tiếng Nhật",
            "Môi trường làm việc thân thiện",
            "Cơ hội làm việc với khách hàng Nhật Bản"
        ],
        postedDate: "2025-03-09",
        deadline: "2025-04-09"
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
        ],
        benefits: [
            "Thưởng hiệu suất",
            "Hỗ trợ đào tạo kỹ năng",
            "Môi trường làm việc chuyên nghiệp"
        ],
        postedDate: "2025-03-11",
        deadline: "2025-04-11"
    },
    { 
        id: 13, 
        title: "Quản Lý Kinh Doanh OTC", 
        company: "Công ty TNHH MTV Khỏe đẹp bền vững", 
        location: "Hà Nội", 
        type: "Toàn thời gian", 
        salary: "Thoả thuận", 
        description: "Có kinh nghiệm ít nhất 2 năm quản lý kênh OTC.", 
        featured: true,
        requirements: [
            "Có ít nhất 2 năm kinh nghiệm quản lý kênh OTC",
            "Hiểu biết về thị trường dược phẩm",
            "Kỹ năng lãnh đạo và lập kế hoạch"
        ],
        benefits: [
            "Thưởng doanh số",
            "Cơ hội thăng tiến",
            "Hỗ trợ chi phí đi lại"
        ],
        postedDate: "2025-03-13",
        deadline: "2025-04-13"
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
        ],
        benefits: [
            "Lương thưởng cạnh tranh",
            "Cơ hội thăng tiến",
            "Hỗ trợ đào tạo"
        ],
        postedDate: "2025-03-14",
        deadline: "2025-04-14"
    },
    { 
        id: 15, 
        title: "Trưởng Phòng Sản Phẩm (R&D) / Phát Triển Tour & Tính Giá Tour", 
        company: "CÔNG TY TNHH VIETRANTOUR", 
        location: "Hà Nội", 
        type: "Bán thời gian", 
        salary: "25 - 30 triệu", 
        description: "Ít nhất 3-5 năm kinh nghiệm trong ngành du lịch, trong đó có kinh nghiệm ở vị trí quản lý sản phẩm/tour.", 
        featured: true,
        requirements: [
            "Có 3-5 năm kinh nghiệm trong ngành du lịch",
            "Có kinh nghiệm ở vị trí quản lý sản phẩm/tour",
            "Kỹ năng nghiên cứu và phát triển sản phẩm du lịch"
        ],
        benefits: [
            "Thưởng theo dự án",
            "Hỗ trợ chi phí đi lại",
            "Môi trường làm việc sáng tạo"
        ],
        postedDate: "2025-03-16",
        deadline: "2025-04-16"
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
        ],
        benefits: [
            "Thưởng dự án cao",
            "Cơ hội thăng tiến",
            "Hỗ trợ chi phí đi lại"
        ],
        postedDate: "2025-03-17",
        deadline: "2025-04-17"
    },
    { 
        id: 17, 
        title: "Kế đồ họa", 
        company: "Công ty DEF", 
        location: "Đà Nẵng", 
        type: "Bán thời gian", 
        salary: "10-15 triệu", 
        description: "Vị trí Kế đồ họa yêu cầu ứng viên có khả năng sáng tạo và sử dụng thành thạo các phần mềm thiết kế để tạo ra các sản phẩm đồ họa chất lượng cao.", 
        featured: true,
        requirements: [
            "Có kinh nghiệm thiết kế đồ họa từ 1 năm trở lên",
            "Thành thạo các phần mềm thiết kế (Photoshop, Illustrator)",
            "Sáng tạo và có khả năng làm việc độc lập"
        ],
        benefits: [
            "Môi trường làm việc sáng tạo",
            "Hỗ trợ thiết bị làm việc",
            "Thưởng theo dự án"
        ],
        postedDate: "2025-03-19",
        deadline: "2025-04-19"
    },
    { 
        id: 18, 
        title: "Nhân viên kinh doanh", 
        company: "Công ty XYZ", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "15-25 triệu", 
        description: "Vị trí Nhân viên kinh doanh yêu cầu ứng viên có kỹ năng giao tiếp tốt, đàm phán và khả năng xây dựng mối quan hệ với khách hàng.", 
        featured: false,
        requirements: [
            "Có kinh nghiệm kinh doanh từ 1 năm trở lên",
            "Kỹ năng giao tiếp và đàm phán tốt",
            "Ưu tiên ứng viên có kinh nghiệm trong ngành bán lẻ"
        ],
        benefits: [
            "Thưởng doanh số hấp dẫn",
            "Hỗ trợ chi phí đi lại",
            "Bảo hiểm đầy đủ"
        ],
        postedDate: "2025-03-21",
        deadline: "2025-04-21"
    },
    { 
        id: 19, 
        title: "Kế đồ họa", 
        company: "Công ty DEF", 
        location: "Đà Nẵng", 
        type: "Bán thời gian", 
        salary: "10-15 triệu", 
        description: "Vị trí Kế đồ họa yêu cầu ứng viên có khả năng sáng tạo và sử dụng thành thạo các phần mềm thiết kế để tạo ra các sản phẩm đồ họa chất lượng cao.", 
        featured: true,
        requirements: [
            "Có kinh nghiệm thiết kế đồ họa từ 1 năm trở lên",
            "Thành thạo các phần mềm thiết kế (Photoshop, Illustrator)",
            "Sáng tạo và có khả năng làm việc độc lập"
        ],
        benefits: [
            "Môi trường làm việc sáng tạo",
            "Hỗ trợ thiết bị làm việc",
            "Thưởng theo dự án"
        ],
        postedDate: "2025-03-22",
        deadline: "2025-04-22"
    },
    { 
        id: 20, 
        title: "Nhân viên kinh doanh", 
        company: "Công ty XYZ", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "15-25 triệu", 
        description: "Vị trí Nhân viên kinh doanh yêu cầu ứng viên có kỹ năng giao tiếp tốt, đàm phán và khả năng xây dựng mối quan hệ với khách hàng.", 
        featured: false,
        requirements: [
            "Có kinh nghiệm kinh doanh từ 1 năm trở lên",
            "Kỹ năng giao tiếp và đàm phán tốt",
            "Ưu tiên ứng viên có kinh nghiệm trong ngành bán lẻ"
        ],
        benefits: [
            "Thưởng doanh số hấp dẫn",
            "Hỗ trợ chi phí đi lại",
            "Bảo hiểm đầy đủ"
        ],
        postedDate: "2025-03-23",
        deadline: "2025-04-23"
    },
    { 
        id: 21, 
        title: "Kế đồ họa", 
        company: "Công ty DEF", 
        location: "Đà Nẵng", 
        type: "Bán thời gian", 
        salary: "10-15 triệu", 
        description: "Vị trí Kế đồ họa yêu cầu ứng viên có khả năng sáng tạo và sử dụng thành thạo các phần mềm thiết kế để tạo ra các sản phẩm đồ họa chất lượng cao.", 
        featured: true,
        requirements: [
            "Có kinh nghiệm thiết kế đồ họa từ 1 năm trở lên",
            "Thành thạo các phần mềm thiết kế (Photoshop, Illustrator)",
            "Sáng tạo và có khả năng làm việc độc lập"
        ],
        benefits: [
            "Môi trường làm việc sáng tạo",
            "Hỗ trợ thiết bị làm việc",
            "Thưởng theo dự án"
        ],
        postedDate: "2025-03-24",
        deadline: "2025-04-24"
    },
    { 
        id: 22, 
        title: "Nhân viên kinh doanh", 
        company: "Công ty XYZ", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "15-25 triệu", 
        description: "Vị trí Nhân viên kinh doanh yêu cầu ứng viên có kỹ năng giao tiếp tốt, đàm phán và khả năng xây dựng mối quan hệ với khách hàng.", 
        featured: false,
        requirements: [
            "Có kinh nghiệm kinh doanh từ 1 năm trở lên",
            "Kỹ năng giao tiếp và đàm phán tốt",
            "Ưu tiên ứng viên có kinh nghiệm trong ngành bán lẻ"
        ],
        benefits: [
            "Thưởng doanh số hấp dẫn",
            "Hỗ trợ chi phí đi lại",
            "Bảo hiểm đầy đủ"
        ],
        postedDate: "2025-03-25",
        deadline: "2025-04-25"
    },
    { 
        id: 23, 
        title: "Kế đồ họa", 
        company: "Công ty DEF", 
        location: "Đà Nẵng", 
        type: "Bán thời gian", 
        salary: "10-15 triệu", 
        description: "Vị trí Kế đồ họa yêu cầu ứng viên có khả năng sáng tạo và sử dụng thành thạo các phần mềm thiết kế để tạo ra các sản phẩm đồ họa chất lượng cao.", 
        featured: true,
        requirements: [
            "Có kinh nghiệm thiết kế đồ họa từ 1 năm trở lên",
            "Thành thạo các phần mềm thiết kế (Photoshop, Illustrator)",
            "Sáng tạo và có khả năng làm việc độc lập"
        ],
        benefits: [
            "Môi trường làm việc sáng tạo",
            "Hỗ trợ thiết bị làm việc",
            "Thưởng theo dự án"
        ],
        postedDate: "2025-03-26",
        deadline: "2025-04-26"
    },
    { 
        id: 24, 
        title: "Nhân viên kinh doanh", 
        company: "Công ty XYZ", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "15-25 triệu", 
        description: "Vị trí Nhân viên kinh doanh yêu cầu ứng viên có kỹ năng giao tiếp tốt, đàm phán và khả năng xây dựng mối quan hệ với khách hàng.", 
        featured: false,
        requirements: [
            "Có kinh nghiệm kinh doanh từ 1 năm trở lên",
            "Kỹ năng giao tiếp và đàm phán tốt",
            "Ưu tiên ứng viên có kinh nghiệm trong ngành bán lẻ"
        ],
        benefits: [
            "Thưởng doanh số hấp dẫn",
            "Hỗ trợ chi phí đi lại",
            "Bảo hiểm đầy đủ"
        ],
        postedDate: "2025-03-27",
        deadline: "2025-04-27"
    },
    { 
        id: 25, 
        title: "Kế đồ họa", 
        company: "Công ty DEF", 
        location: "Đà Nẵng", 
        type: "Bán thời gian", 
        salary: "10-15 triệu", 
        description: "Vị trí Kế đồ họa yêu cầu ứng viên có khả năng sáng tạo và sử dụng thành thạo các phần mềm thiết kế để tạo ra các sản phẩm đồ họa chất lượng cao.", 
        featured: true,
        requirements: [
            "Có kinh nghiệm thiết kế đồ họa từ 1 năm trở lên",
            "Thành thạo các phần mềm thiết kế (Photoshop, Illustrator)",
            "Sáng tạo và có khả năng làm việc độc lập"
        ],
        benefits: [
            "Môi trường làm việc sáng tạo",
            "Hỗ trợ thiết bị làm việc",
            "Thưởng theo dự án"
        ],
        postedDate: "2025-03-28",
        deadline: "2025-04-28"
    },
    { 
        id: 26, 
        title: "Nhân viên kinh doanh", 
        company: "Công ty XYZ", 
        location: "Thành phố Hồ Chí Minh", 
        type: "Toàn thời gian", 
        salary: "15-25 triệu", 
        description: "Vị trí Nhân viên kinh doanh yêu cầu ứng viên có kỹ năng giao tiếp tốt, đàm phán và khả năng xây dựng mối quan hệ với khách hàng.", 
        featured: false,
        requirements: [
            "Có kinh nghiệm kinh doanh từ 1 năm trở lên",
            "Kỹ năng giao tiếp và đàm phán tốt",
            "Ưu tiên ứng viên có kinh nghiệm trong ngành bán lẻ"
        ],
        benefits: [
            "Thưởng doanh số hấp dẫn",
            "Hỗ trợ chi phí đi lại",
            "Bảo hiểm đầy đủ"
        ],
        postedDate: "2025-03-29",
        deadline: "2025-04-29"
    },
    { 
        id: 27, 
        title: "Kế đồ họa", 
        company: "Công ty DEF", 
        location: "Đà Nẵng", 
        type: "Bán thời gian", 
        salary: "10-15 triệu", 
        description: "Vị trí Kế đồ họa yêu cầu ứng viên có khả năng sáng tạo và sử dụng thành thạo các phần mềm thiết kế để tạo ra các sản phẩm đồ họa chất lượng cao.", 
        featured: true,
        requirements: [
            "Có kinh nghiệm thiết kế đồ họa từ 1 năm trở lên",
            "Thành thạo các phần mềm thiết kế (Photoshop, Illustrator)",
            "Sáng tạo và có khả năng làm việc độc lập"
        ],
        benefits: [
            "Môi trường làm việc sáng tạo",
            "Hỗ trợ thiết bị làm việc",
            "Thưởng theo dự án"
        ],
        postedDate: "2025-03-30",
        deadline: "2025-04-30"
    }
];

// Lấy ID từ URL parameter
const urlParams = new URLSearchParams(window.location.search);
const jobId = parseInt(urlParams.get('id'));

// Hiển thị chi tiết công việc
function displayJobDetail() {
    const job = jobData.find(j => j.id === jobId);
    const jobDetailContainer = document.getElementById('jobDetail');

    if (!job) {
        jobDetailContainer.innerHTML = '<p class="no-results">Không tìm thấy thông tin công việc.</p>';
        return;
    }

    jobDetailContainer.innerHTML = `
        <h1>${job.title}</h1>
        <p class="company"><i class="fas fa-building"></i> ${job.company}</p>
        <div class="job-details">
            <span class="detail-item"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
            <span class="detail-item"><i class="fas fa-briefcase"></i> ${job.type}</span>
            <span class="detail-item"><i class="fas fa-money-bill-wave"></i> ${job.salary}</span>
        </div>
        <div class="job-meta">
            <p><strong>Ngày đăng:</strong> ${job.postedDate}</p>
            <p><strong>Hạn nộp hồ sơ:</strong> ${job.deadline}</p>
        </div>
        <div class="description">
            <h3>Mô Tả Công Việc</h3>
            <p>${job.description}</p>
        </div>
        <div class="requirements">
            <h3>Yêu Cầu Công Việc</h3>
            <ul>
                ${job.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
        <div class="benefits">
            <h3>Quyền Lợi</h3>
            <ul>
                ${job.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
        </div>
        <button class="apply-button" onclick="showModal('applyJobModal')">Ứng Tuyển Ngay</button>    `;
}

// Hiển thị modal
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Đóng modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
// Xử lý gửi đơn ứng tuyển
function submitApplication(event) {
    event.preventDefault(); // Ngăn form gửi đi mặc định
    const form = document.getElementById('applyForm');
    const formData = new FormData(form);

    // Lấy dữ liệu từ form
    const fullName = formData.get('Họ và tên');
    const email = formData.get('Email');
    const phone = formData.get('Số điện thoại');
    const address = formData.get('Địa chỉ');
    const cv = formData.get('cvUpload');
    const introduction = formData.get('Giới thiệu bản thân');

    // Ở đây bạn có thể thêm logic để gửi dữ liệu này đến server, ví dụ qua API
    console.log({
        fullName,
        email,
        phone,
        address,
        cv,
        introduction
    });

    // Thông báo thành công và đóng modal
    alert('Đơn ứng tuyển của bạn đã được gửi thành công!');
    closeModal('applyJobModal');
    form.reset(); // Xóa dữ liệu trong form
}
// Khởi tạo khi tải trang
window.onload = () => {
    displayJobDetail();
};