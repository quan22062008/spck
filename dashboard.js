// API endpoint
const API_URL = 'https://67f2345cec56ec1a36d26a02.mockapi.io/jobs';

// Hàm lấy dữ liệu từ API
async function fetchJobs() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Lỗi ${response.status}: Không thể lấy dữ liệu từ API`);
        const jobs = await response.json();
        return jobs;
    } catch (error) {
        console.error('Lỗi khi fetch dữ liệu:', error.message);
        return [];
    }
}

// Hiển thị danh sách công việc
async function displayJobs() {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';
    
    const jobs = await fetchJobs();

    if (jobs.length === 0) {
        jobList.innerHTML = '<p>Không có công việc nào để hiển thị.</p>';
        return;
    }

    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.innerHTML = `
            <div>
                <strong>${job.title || 'Không có tiêu đề'}</strong> - ${job.company || 'Không có công ty'} (${job.location || 'Không có địa điểm'})<br>
                <small>${job.type || 'Không xác định'} | ${job.salary || 'Không có lương'} | ${job.description || 'Không có mô tả'}</small>
            </div>
            <div>
                <button class="edit-btn" onclick="editJob('${job.id}')"><i class="fas fa-edit"></i> Sửa</button>
                <button class="delete-btn" onclick="deleteJob('${job.id}')"><i class="fas fa-trash"></i> Xóa</button>
            </div>
        `;
        jobList.appendChild(jobItem);
    });
}

// Thêm công việc mới qua API
async function addJob(event) {
    event.preventDefault();

    const newJob = {
        title: document.getElementById('title').value,
        company: document.getElementById('company').value,
        location: document.getElementById('location').value,
        type: document.getElementById('type').value,
        salary: document.getElementById('salary').value,
        description: document.getElementById('description').value,
        featured: false,
        requirements: []
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });

        if (!response.ok) throw new Error(`Lỗi ${response.status}: Không thể thêm công việc`);
        
        displayJobs();
        document.getElementById('addJobForm').reset();
        alert('Công việc đã được thêm thành công!');
    } catch (error) {
        console.error('Lỗi khi thêm công việc:', error.message);
        alert(`Có lỗi xảy ra khi thêm công việc: ${error.message}`);
    }
}

// Điền dữ liệu vào form chỉnh sửa
async function editJob(jobId) {
    try {
        const response = await fetch(`${API_URL}/${jobId}`);
        if (!response.ok) throw new Error(`Lỗi ${response.status}: Không tìm thấy công việc với ID ${jobId}`);
        const job = await response.json();

        // Điền dữ liệu vào form
        document.getElementById('editId').value = job.id;
        document.getElementById('editTitle').value = job.title || '';
        document.getElementById('editCompany').value = job.company || '';
        document.getElementById('editLocation').value = job.location || '';
        document.getElementById('editType').value = job.type || '';
        document.getElementById('editSalary').value = job.salary || '';
        document.getElementById('editDescription').value = job.description || '';

        // Hiển thị form chỉnh sửa
        document.getElementById('editJobFormContainer').style.display = 'block';
        // Ẩn form thêm mới để tránh nhầm lẫn
        document.querySelector('.add-job-form').style.display = 'none';
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu công việc:', error.message);
        alert(`Có lỗi xảy ra khi lấy dữ liệu công việc: ${error.message}`);
    }
}

// Cập nhật công việc qua API
async function updateJob(event) {
    event.preventDefault();

    const jobId = document.getElementById('editId').value;
    const updatedJob = {
        title: document.getElementById('editTitle').value,
        company: document.getElementById('editCompany').value,
        location: document.getElementById('editLocation').value,
        type: document.getElementById('editType').value,
        salary: document.getElementById('editSalary').value,
        description: document.getElementById('editDescription').value,
        featured: false,
        requirements: []
    };

    try {
        const response = await fetch(`${API_URL}/${jobId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        });

        if (!response.ok) throw new Error(`Lỗi ${response.status}: Không thể cập nhật công việc`);
        
        displayJobs();
        cancelEdit();
        alert('Công việc đã được cập nhật thành công!');
    } catch (error) {
        console.error('Lỗi khi cập nhật công việc:', error.message);
        alert(`Có lỗi xảy ra khi cập nhật công việc: ${error.message}`);
    }
}

// Hủy chỉnh sửa
function cancelEdit() {
    document.getElementById('editJobFormContainer').style.display = 'none';
    document.querySelector('.add-job-form').style.display = 'block';
    document.getElementById('editJobForm').reset();
}

// Xóa công việc qua API
async function deleteJob(jobId) {
    if (confirm('Bạn có chắc chắn muốn xóa công việc này?')) {
        try {
            const response = await fetch(`${API_URL}/${jobId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error(`Không tìm thấy công việc với ID ${jobId}`);
                }
                throw new Error(`Lỗi ${response.status}: Không thể xóa công việc`);
            }

            displayJobs();
            alert('Công việc đã được xóa!');
        } catch (error) {
            console.error('Lỗi khi xóa công việc:', error.message);
            alert(`Có lỗi xảy ra khi xóa công việc: ${error.message}`);
        }
    }
}

// Khởi tạo khi tải trang
window.onload = () => {
    displayJobs();
};