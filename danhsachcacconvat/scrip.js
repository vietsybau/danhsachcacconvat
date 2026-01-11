const animals = [
    {
        ten: "Cáo tuyết",
        anh: "images/cao/cao1.webp",
        gallery: [
            "images/cao/cao1.webp",
            "images/cao/cao2.webp",
            "images/cao/cao3.webp",
            "images/cao/cao4.webp"
        ]
    },
    {
        ten: "Tắc kè hoa",
        anh: "images/tackehoa/tacke1.webp",
        gallery: [
            "images/tackehoa/tacke1.webp",
            "images/tackehoa/tacke2.webp",
            "images/tackehoa/tacke3.webp",
            "images/tackehoa/tacke4.webp"
        ]
    },
    {
        ten: "Cú mèo",
        anh: "images/cu/cu1.webp",
        gallery: [
            "images/cu/cu1.webp",
            "images/cu/cu2.webp",
            "images/cu/cu3.webp",
            "images/cu/cu4.webp"
        ]
    },
    {
        ten: "Rái cá",
        anh: "images/raica/raica1.webp",
        gallery: [
            "images/raica/raica1.webp",
            "images/raica/raica2.webp",
            "images/raica/raica3.webp",
            "images/raica/raica4.webp"
        ]
    },
    {
        ten: "Nhím gai",
        anh: "images/nhim/nhim1.webp",
        gallery: [
            "images/nhim/nhim1.webp",
            "images/nhim/nhim2.webp",
            "images/nhim/nhim3.webp",
            "images/nhim/nhim4.webp"
        ]
    }
];

const danhSachDiv = document.getElementById("danhsach");
const thuVienDiv = document.getElementById("thuvienanh");

animals.forEach(conVat => {
    const div = document.createElement("div");
    div.className = "animal-item";

    div.innerHTML = `
        <img src="${conVat.anh}">
        <p>${conVat.ten}</p>
    `;

    div.onclick = () => hienThiThuVien(conVat.gallery);

    danhSachDiv.appendChild(div);
});

function hienThiThuVien(images) {
    thuVienDiv.innerHTML = "";
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        thuVienDiv.appendChild(img);
    });
}
