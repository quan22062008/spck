function searchJobs() {
    const jobTitle = document.getElementById('job-title').value;
    const location = document.getElementById('location').value;
    const salary = document.getElementById('salary').value;
    const resultsDiv = document.getElementById('results');

    if (!jobTitle && !location && !salary) {
        resultsDiv.innerHTML = '<span style="color: red;">Vui lòng nhập ít nhất một tiêu chí để tìm kiếm!</span>';
        return;
    }

    let resultText = 'Kết quả tìm kiếm: ';
    if (jobTitle) resultText += `<strong>Vị trí:</strong> ${jobTitle} `;
    if (location) resultText += `<strong>Địa điểm:</strong> ${document.getElementById('location').options[document.getElementById('location').selectedIndex].text} `;
    if (salary) resultText += `<strong>Mức lương:</strong> ${document.getElementById('salary').options[document.getElementById('salary').selectedIndex].text}`;

    resultsDiv.innerHTML = resultText;
}


// thanh địa điểm
const provinces = [
    { name: "Hà Nội", url: "/jobs/ha-noi" },
    { name: "Hồ Chí Minh", url: "/jobs/ho-chi-minh" },
    { name: "Đà Nẵng", url: "/jobs/da-nang" },
    { name: "Nha Trang (Khánh Hòa)", url: "/jobs/nha-trang" },
    { name: "Đà Lạt (Lâm Đồng)", url: "/jobs/da-lat" },
    { name: "Hội An (Quảng Nam)", url: "/jobs/hoi-an" },
    { name: "Phú Quốc (Kiên Giang)", url: "/jobs/phu-quoc" }
];

// Lấy thẻ div chứa danh sách tỉnh
const provinceBar = document.getElementById("provinceBar");

// Thêm các tỉnh vào thanh ngang
provinces.forEach(province => {
    const provinceItem = document.createElement("a");
    provinceItem.className = "province-item";
    provinceItem.textContent = province.name;
    provinceItem.href = province.url; // Gán URL cho thẻ <a>
    provinceBar.appendChild(provinceItem);
});