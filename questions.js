const quizData = [
    // ==================== PHẦN I: ĐIỀU LỆNH QUẢN LÝ BỘ ĐỘI (20 CÂU CHUẨN) ====================
    {
        id: "p1_c1",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 1. Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN thay thế Thông tư 193/2011/TT-BQP ngày 23/11/2011 của Bộ trưởng Bộ Quốc phòng có hiệu lực thi hành vào ngày, tháng, năm nào?",
        options: [
            "01/4/2026",
            "02/4/2026",
            "15/5/2026",
            "16/5/2026"
        ],
        answer: 3,
        explain: "Thông tư 24/2026/TT-BQP ký ngày 01/4/2026, có hiệu lực thi hành từ ngày 16/5/2026 (sau 45 ngày)."
    },
    {
        id: "p1_c2",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 2. Điều 9, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định nguyên tắc tổ chức quan hệ cấp trên, cấp dưới được xác định như thế nào?",
        options: [
            "Theo chức vụ, cấp bậc quân hàm của quân nhân.",
            "Theo qui định của chỉ huy từng đơn vị.",
            "Theo tuổi tác, thâm niên nghề nghiệp.",
            "Theo tính chất tình cảm, tôn trọng nhau."
        ],
        answer: 0,
        explain: "Điều 9 quy định quan hệ cấp trên, cấp dưới thuộc về nguyên tắc tổ chức, được xác định theo chức vụ, cấp bậc quân hàm của quân nhân."
    },
    {
        id: "p1_c3",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 3. Điều 32, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định về phong cách quân nhân như thế nào?",
        options: [
            "Đầu tóc phải gọn gàng, chỉ được nhuộm tóc đen; nam quân nhân tóc mai, tóc gáy cắt ngắn (HSQ-BS cắt tóc 3 phân), không để râu, ria; Nữ quân nhân khi mặc quân phục phải búi tóc gọn gàng sau gáy, búi tóc buộc trong túi lưới màu đen.",
            "Uống rượu bia trong giờ nghỉ giữa giờ làm việc; nghỉ buổi trưa ngày làm việc; uống say trong dịp Lễ, Tết; mang mặc quân phục ngồi ở quán vỉa hè.",
            "Hút thuốc lá nơi công cộng; đánh bạc, cá độ, tổ chức cho vay nặng lãi; bán hàng đa cấp, mua bán tàng trữ, vận chuyển và sử dụng các chất kích thích, chất gây nghiện.",
            "Xăm hình, xăm chữ trên thân thể; đeo chìa khóa hoặc vật dụng trang trí trên thắt lưng; đeo khuyên tai, dây chuyền, nhẫn, lắc, vòng, chuỗi hạt và các đồ trang sức khác."
        ],
        answer: 0,
        explain: "Điều 32 quy định về phong cách quân nhân: đầu tóc gọn gàng, chỉ nhuộm tóc đen; HSQ-BS cắt tóc 3 phân; nữ búi tóc gọn sau gáy buộc trong túi lưới màu đen..."
    },
    {
        id: "p1_c4",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 4. Điều 36, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định Quân nhân chào bằng động tác (khi mặc quân phục) có bao nhiêu trường hợp?",
        options: [
            "10 trường hợp.",
            "11 trường hợp.",
            "12 trường hợp.",
            "13 trường hợp."
        ],
        answer: 2,
        explain: "Điều 36 quy định có 12 trường hợp quân nhân chào bằng động tác khi mặc quân phục."
    },
    {
        id: "p1_c5",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 5. Điều 41, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định mỗi tuần làm việc 05 ngày, nghỉ 02 ngày vào thứ Bảy và Chủ nhật; nếu nghỉ vào ngày khác trong tuần thì do cấp nào quy định thống nhất cho đơn vị thuộc quyền?",
        options: [
            "Tiểu đoàn trưởng, đại đội và tương đương trở lên",
            "Trung đoàn trưởng và tương đương trở lên",
            "Sư đoàn trưởng và tương đương trở lên",
            "Tư lệnh Quân khu, Quân chủng, Quân đoàn và tương đương trở lên"
        ],
        answer: 3,
        explain: "Điều 41: Nếu nghỉ vào ngày khác trong tuần thì do Tư lệnh Quân khu, Quân chủng, Quân đoàn và tương đương trở lên quy định thống nhất."
    },
    {
        id: "p1_c6",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 6. Điều 41, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định quân nhân làm việc vào ngày nghỉ thì được nghỉ bù. Thời gian và quyền hạn cho quân nhân nghỉ bù do người chỉ huy cấp nào quyết định?",
        options: [
            "Chỉ huy cấp đại đội và tương đương trở lên.",
            "Chỉ huy tiểu đoàn và tương đương trở lên.",
            "Chỉ huy trung đoàn và tương đương trở lên.",
            "Chỉ huy tiểu đoàn và đại đội."
        ],
        answer: 0,
        explain: "Điều 41: Thời gian và quyền hạn cho quân nhân nghỉ bù do người chỉ huy cấp đại đội và tương đương trở lên quyết định."
    },
    {
        id: "p1_c7",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 7. Điều 47, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định thời gian kiểm tra sáng bao nhiêu phút?",
        options: [
            "10 phút",
            "15 phút",
            "20 phút",
            "25 phút"
        ],
        answer: 0,
        explain: "Điều 47 quy định thời gian kiểm tra sáng là 10 phút."
    },
    {
        id: "p1_c8",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 8. Điều 50, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định hàng tuần thời gian bảo quản vũ khí bộ binh bao nhiêu phút?",
        options: [
            "30 phút",
            "40 phút",
            "50 phút",
            "60 phút"
        ],
        answer: 1,
        explain: "Điều 50 quy định thời gian bảo quản vũ khí bộ binh hằng tuần là 40 phút."
    },
    {
        id: "p1_c9",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 9. Điều 51, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định thời gian thể thao, tăng gia bao nhiêu phút?",
        options: [
            "Từ 30 đến 40 phút",
            "Từ 35 đến 45 phút",
            "Từ 40 đến 45 phút",
            "Từ 45 đến 50 phút"
        ],
        answer: 2,
        explain: "Điều 51 quy định thời gian thể thao, tăng gia hằng ngày từ 40 đến 45 phút."
    },
    {
        id: "p1_c10",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 10. Điều 53, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định thời gian điểm danh, điểm quân số bao nhiêu phút?",
        options: [
            "Không quá 20 phút",
            "Không quá 25 phút",
            "Không quá 30 phút",
            "Không quá 40 phút"
        ],
        answer: 2,
        explain: "Điều 53 quy định thời gian điểm danh, điểm quân số không quá 30 phút."
    },
    {
        id: "p1_c11",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 11. Điều 79, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định thời gian tổ chức kiểm tra đơn vị của Tiểu đoàn trưởng như thế nào?",
        options: [
            "Ít nhất một ngày phải kiểm tra 01 lần",
            "Ít nhất bốn ngày phải kiểm tra 01 lần",
            "Ít nhất một tháng phải kiểm tra 01 lần",
            "Ít nhất một tuần phải kiểm tra 01 lần"
        ],
        answer: 3,
        explain: "Điều 79 quy định Tiểu đoàn trưởng ít nhất một tuần phải kiểm tra đơn vị 01 lần."
    },
    {
        id: "p1_c12",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 12. Điều 81, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định thời gian tổ chức chế độ tự phê bình và phê bình của cấp đại đội, trung đội, tiểu đội và tương đương như thế nào?",
        options: [
            "Một ngày một lần",
            "Một tuần một lần",
            "Một tháng một lần",
            "Một quý một lần"
        ],
        answer: 2,
        explain: "Điều 81: Cấp đại đội, trung đội, tiểu đội và tương đương tổ chức tự phê bình và phê bình một tháng một lần."
    },
    {
        id: "p1_c13",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 13. Điều 121, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định người gác như thế nào?",
        options: [
            "Người gác là người đang làm nhiệm vụ sẵn sàng chiến đấu để bảo vệ mục tiêu được giao. Không ai được xâm phạm đến thân thể, vị trí gác của người gác.",
            "Người gác phải ở vị trí gác, có thể đi lại xung quanh khu vực vọng gác. Tư thế phải nghiêm túc, đúng động tác gác; nếu trang bị súng tiểu liên thì ở tư thế mang (treo) súng hoặc chuẩn bị bắn, nếu trang bị súng trường thì ở tư thế nghiêm, nghỉ, khi di chuyển thì xách súng hoặc cầm ngang súng.",
            "Người gác phải luôn tỉnh táo, tập trung tư tưởng; không ngủ gật, hút thuốc, đọc báo, hát, nói chuyện, cười đùa, ăn uống... Cấm bỏ gác hoặc nhận bất cứ vật gì của người khác.",
            "Cả ba nội dung trên."
        ],
        answer: 3,
        explain: "Điều 121 quy định đầy đủ cả ba nội dung trên về nhiệm vụ, tư thế và tác phong của người gác."
    },
    {
        id: "p1_c14",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 14. Điều 133, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định cán bộ cấp đại đội và tương đương quản lý chất lượng quân nhân như thế nào?",
        options: [
            "Quản lý đến từng chiến sĩ.",
            "Quản lý đến cán bộ tiểu đội.",
            "Quản lý đến cán bộ trung đội.",
            "Quản lý đến cán bộ đại đội."
        ],
        answer: 0,
        explain: "Điều 133 quy định cán bộ cấp đại đội và tương đương phải quản lý chất lượng quân nhân đến từng chiến sĩ."
    },
    {
        id: "p1_c15",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 15. Điều 81, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định thời gian tổ chức chế độ tự phê bình và phê bình của cấp tiểu đoàn, lữ đoàn và tương đương như thế nào?",
        options: [
            "Mỗi tháng một lần",
            "Mỗi quý một lần",
            "Mỗi quý hai lần",
            "Mỗi năm ba lần"
        ],
        answer: 1,
        explain: "Điều 81: Cấp tiểu đoàn, lữ đoàn và tương đương tổ chức chế độ tự phê bình và phê bình mỗi quý một lần."
    },
    {
        id: "p1_c16",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 16. Điều 123, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định quân nhân đang làm nhiệm vụ canh phòng chỉ được sử dụng vũ khí trong các trường hợp nào?",
        options: [
            "Tính mạng của mình và người xung quanh bị uy hiếp nghiêm trọng",
            "Mục tiêu canh phòng bị tấn công",
            "Kẻ phạm pháp chạy trốn sau khi đã cảnh cáo vẫn kháng cự",
            "Cả 3 ý trên"
        ],
        answer: 3,
        explain: "Điều 123 quy định quân nhân làm nhiệm vụ canh phòng được sử dụng vũ khí trong cả 3 trường hợp trên."
    },
    {
        id: "p1_c17",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 17. Điều 189, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định yêu cầu khen thưởng và xử phạt như thế nào?",
        options: [
            "Nhanh chóng, nghiêm túc, chính xác, kịp thời, công bằng, dân chủ, công khai, đúng quyền hạn, đúng thủ tục.",
            "Khách quan, công bằng, nghiêm minh, chính xác, kịp thời; dân chủ, công khai, đúng quyền hạn, đúng thủ tục.",
            "Nghiêm minh, chính xác, kịp thời, khẩn trương công bằng, dân chủ, công khai, đúng quyền hạn, đúng thời gian",
            "Nghiêm minh, công bằng, dân chủ, công khai, đúng quyền hạn, đúng thủ tục."
        ],
        answer: 1,
        explain: "Điều 189: Khách quan, công bằng, nghiêm minh, chính xác, kịp thời; dân chủ, công khai, đúng quyền hạn, đúng thủ tục."
    },
    {
        id: "p1_c18",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 18. Điều 185, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định nội dung nào không phải căn cứ xét khen thưởng?",
        options: [
            "Tiêu chuẩn khen thưởng.",
            "Phạm vi mức độ ảnh hưởng của thành tích.",
            "Trách nhiệm và hoàn cảnh khi lập được thành tích.",
            "Hoàn thành nhiệm vụ được giao."
        ],
        answer: 3,
        explain: "Điều 185: 'Hoàn thành nhiệm vụ được giao' là chức trách thường xuyên, không phải căn cứ xét khen thưởng."
    },
    {
        id: "p1_c19",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 19. Điều 146, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định thời gian kiểm tra tình hình VKTBKT (bao gồm cả số niêm cất) của trung đội trưởng và tương đương như thế nào?",
        options: [
            "Một ngày phải kiểm tra ít nhất một tiểu đội",
            "Hai ngày phải kiểm tra ít nhất một tiểu đội",
            "Ba ngày phải kiểm tra ít nhất một tiểu đội",
            "Một tuần phải kiểm tra ít nhất một tiểu đội"
        ],
        answer: 1,
        explain: "Điều 146 quy định trung đội trưởng và tương đương hai ngày phải kiểm tra ít nhất một tiểu đội."
    },
    {
        id: "p1_c20",
        category: "Phần I: Điều lệnh quản lý bộ đội",
        question: "Câu 20. Điều 151, Thông tư 24/2026/TT-BQP ngày 01/4/2026 của Bộ Quốc phòng Ban hành Điều lệnh quản lý bộ đội QĐNDVN quy định thời gian kiểm tra quân trang của Đại đội trưởng và tương đương như thế nào?",
        options: [
            "Mỗi tuần một lần",
            "Mỗi tháng một lần",
            "Ba tháng một lần",
            "Sáu tháng một lần"
        ],
        answer: 2,
        explain: "Điều 151 quy định Đại đội trưởng và tương đương kiểm tra quân trang ba tháng một lần."
    },

    // ==================== PHẦN II: XÂY DỰNG NỀN NẾP CHÍNH QUY (20 CÂU CHUẨN) ====================
    {
        id: "p2_c1",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 1. Điều 16, Thông tư 143/2023/TT-BQP, ngày 27/12/2023 của Bộ quốc phòng quy định quân nhân nào chấp hành không nghiêm mệnh lệnh khi được người chỉ huy trực tiếp giao thì bị kỷ luật cao nhất đến hình thức nào?",
        options: [
            "Giáng chức",
            "Cách chức",
            "Giáng cấp bậc quân hàm",
            "Tước danh hiệu quân nhân"
        ],
        answer: 2,
        explain: "Mẹo: Chấp hành KHÔNG NGHIÊM mệnh lệnh (nặng hơn lơ là, tùy tiện) -> Nhảy mức lên Giáng cấp bậc quân hàm."
    },
    {
        id: "p2_c2",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 2. Điều 18, Thông tư 143/2023/TT-BQP, ngày 27/12/2023 của Bộ quốc phòng quy định người nào xúc phạm đến nhân phẩm, danh dự, uy tín của đồng đội trong quan hệ công tác thì bị kỷ luật cao nhất đến hình thức nào?",
        options: [
            "Cách chức",
            "Giáng cấp bậc quân hàm",
            "Tước quân hàm sĩ quan",
            "Tước danh hiệu quân nhân"
        ],
        answer: 3,
        explain: "Mẹo: Xúc phạm NHÂN PHẨM, DANH DỰ đồng đội -> Mức nặng nhất: Tước danh hiệu quân nhân."
    },
    {
        id: "p2_c3",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 3. Điều 20, Thông tư 143/2023/TT-BQP, ngày 27/12/2023 của Bộ quốc phòng quy định sĩ quan nào vắng mặt ở đơn vị từ 24 giờ trở lên đến 03 ngày thì bị kỷ luật cao nhất đến hình thức nào?",
        options: [
            "Giáng chức",
            "Cách chức",
            "Giáng cấp bậc quân hàm",
            "Tước quân hàm sĩ quan"
        ],
        answer: 3,
        explain: "Mẹo: Đề hỏi đối tượng 'SĨ QUAN' vắng mặt 24h - 03 ngày -> Chọn ngay đáp án có chữ sĩ quan: Tước quân hàm sĩ quan."
    },
    {
        id: "p2_c4",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 4. Chỉ thị 3535/CT-BTL-QH ngày 22/3/2012 của Tư lệnh Hải quân về việc triển khai Chỉ thị 04/CT-BQP ngày 09/2/2012 của Bộ trưởng BQP và thực hiện 3 dứt điểm trong Quân chủng, nội dung nào không thuộc 3 dứt điểm?",
        options: [
            "Đánh cờ, bài ăn tiền; đánh đề, cá độ; vay, mượn tài sản không có khả năng trả lại.",
            "Mua bán, tàng trữ, vận chuyển, sử dụng trái phép chất ma túy.",
            "Vi phạm quy định về an toàn giao thông.",
            "Sử dụng rượu bia sai quy định."
        ],
        answer: 2,
        explain: "Mẹo: 3 dứt điểm chỉ gồm Cờ bạc/vay nợ - Ma túy - Rượu bia -> Loại ngay 'Vi phạm quy định về an toàn giao thông'."
    },
    {
        id: "p2_c5",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 5. Chỉ thị 863/CT-BTL ngày 20/01/2020 của Tư lệnh Quân chủng chỉ thị về nội dung gì?",
        options: [
            "Về việc tiếp tục tăng cường quản lý, giáo dục chấp hành kỷ luật và bảo đảm an toàn trong QĐNDVN.",
            "Về việc nâng cao hiệu quả hoạt động của công tác canh phòng trong toàn Quân chủng.",
            "Về việc xử lý kỷ luật đối với hành vi đã sử dụng rượu, bia vẫn điều khiển phương tiện làm xảy ra tai nạn nghiêm trọng trong Quân chủng.",
            "Về việc xử lý kỷ luật đối với hành vi đã sử dụng rượu, bia vẫn điều khiển phương tiện tham gia giao thông trong Quân chủng."
        ],
        answer: 3,
        explain: "Mẹo: Nhớ 863 = Rượu bia + Tham gia giao thông (chọn câu ngắn, không chọn câu có chữ 'tai nạn nghiêm trọng')."
    },
    {
        id: "p2_c6",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 6. Điều 5, Thông tư 143/2023/TT-BQP, ngày 27/12/2023, quy định tình tiết nào dưới đây là tình tiết tăng nặng trong xử lý kỷ luật?",
        options: [
            "Lợi dụng chức vụ, quyền hạn để vi phạm kỷ luật.",
            "Do không hiểu biết về quy định.",
            "Báo cáo không trung thực.",
            "Cả ba phương án trên."
        ],
        answer: 0,
        explain: "Mẹo: Tình tiết tăng nặng -> Bắt từ khóa 'Lợi dụng chức vụ, quyền hạn'."
    },
    {
        id: "p2_c7",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 7. Điều 6, Thông tư 143/2023/TT-BQP, ngày 27/12/2023 của Bộ quốc phòng quy định trường hợp chưa xem xét kỷ luật?",
        options: [
            "Trong thời gian đang học tập tập trung",
            "Trong thời gian nghỉ quy định (trừ trường hợp nghỉ chuẩn bị hưu).",
            "Trong thời gian đang đi công tác ngoài đơn vị",
            "Trong thời gian diễn tập"
        ],
        answer: 1,
        explain: "Mẹo: Chưa xem xét kỷ luật -> Chọn đáp án có ngoặc đơn '(trừ trường hợp nghỉ chuẩn bị hưu)'."
    },
    {
        id: "p2_c8",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 8. Điều 11, Thông tư 143/2023/TT-BQP, ngày 27/12/2023 của Bộ quốc phòng quy định nội dung nào không phải là hình thức kỷ luật đối với hạ sĩ quan, binh sĩ?",
        options: [
            "Khiển trách",
            "Cảnh cáo",
            "Giữ tại trại (không cho rời tàu đối với Hải quân) trong ngày nghỉ.",
            "Tước danh hiệu quân nhân"
        ],
        answer: 2,
        explain: "Mẹo: Hình thức 'Giữ tại trại (không cho rời tàu...)' đã bãi bỏ, không còn áp dụng cho HSQ-BS."
    },
    {
        id: "p2_c9",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 9. Chỉ thị 3535/CT-BTL-QH ngày 22/3/2012 của Tư lệnh Hải quân về việc triển khai Chỉ thị 04/CT-BQP ngày 09/2/2012 của Bộ trưởng BQP và thực hiện 3 dứt điểm trong Quân chủng, nội dung nào không thuộc 3 dứt điểm?",
        options: [
            "Đánh cờ, bài ăn tiền; đánh đề, cá độ; vay, mượn tài sản không có khả năng trả lại.",
            "Mua bán, tàng trữ, vận chuyển, sử dụng trái phép chất ma túy.",
            "Đã sử dụng rượu, bia vẫn điều khiển phương tiện tham gia giao thông."
        ],
        answer: 2,
        explain: "Mẹo: Ý 'Đã sử dụng rượu, bia vẫn điều khiển phương tiện...' thuộc Chỉ thị 863, không phải tên 3 dứt điểm trong Chỉ thị 3535."
    },
    {
        id: "p2_c10",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 10. Điều 16, Thông tư 143/2023/TT-BQP, ngày 27/12/2023 của Bộ quốc phòng quy định quân nhân nào khi được người chỉ huy trực tiếp giao nhiệm vụ nhưng chấp hành không đầy đủ, lơ là, tùy tiện làm ảnh hưởng đến việc hoàn thành nhiệm vụ của đơn vị thì bị kỷ luật cao nhất đến hình thức nào?",
        options: [
            "Cảnh cáo",
            "Cách chức",
            "Giáng chức",
            "Tước danh hiệu quân nhân"
        ],
        answer: 0,
        explain: "Mẹo: Chấp hành KHÔNG ĐẦY ĐỦ, LƠ LÀ, TÙY TIỆN -> Mức nhẹ nhất trong nhóm: Cảnh cáo (phân biệt với 'không nghiêm' ở Câu 1)."
    },
    {
        id: "p2_c11",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 11. Điều 26, Thông tư 143/2023/TT-BQP, ngày 27/12/2023 của Bộ quốc phòng quy định quân nhân nào tự ý bỏ vị trí hoặc không hoàn thành nhiệm vụ được giao thì bị kỷ luật cao nhất đến hình thức nào?",
        options: [
            "Cảnh cáo",
            "Cách chức",
            "Giáng cấp bậc quân hàm",
            "Tước danh hiệu quân nhân"
        ],
        answer: 2,
        explain: "Mẹo: Tự ý BỎ VỊ TRÍ hoặc KHÔNG HOÀN THÀNH NHIỆM VỤ -> Cao nhất đến Giáng cấp bậc quân hàm."
    },
    {
        id: "p2_c12",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 12. Điều 28, Thông tư 143/2023/TT-BQP, ngày 27/12/2023 của Bộ quốc phòng quy định quân nhân nào vi phạm các quy định về bảo đảm an toàn thì bị kỷ luật cao nhất đến hình thức nào?",
        options: [
            "Cảnh cáo",
            "Cách chức",
            "Giáng cấp bậc quân hàm",
            "Tước danh hiệu quân nhân"
        ],
        answer: 2,
        explain: "Mẹo: Vi phạm quy định về BẢO ĐẢM AN TOÀN -> Cao nhất đến Giáng cấp bậc quân hàm."
    },
    {
        id: "p2_c13",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 13. Quyết định số 9355/QĐ-BTL ngày 22 tháng 7 năm 2019 của Tư lệnh Hải quân về nội dung gì?",
        options: [
            "Về việc ban hành Quy chế bảo đảm an toàn các hoạt động trong Quân chủng.",
            "Về việc xử lý quân nhân vi phạm quy định về an toàn giao thông do lỗi chủ quan gây hậu quả nghiêm trọng.",
            "Về việc tăng cường xây dựng nền nếp chính quy; quản lý, rèn luyện kỷ luật và bảo đảm an toàn giai đoạn 2020 - 2023 của Quân chủng.",
            "Về việc thực hiện 3 dứt điểm trong Quân chủng hải quân"
        ],
        answer: 0,
        explain: "Mẹo: Nhớ số 9355 = Quy chế bảo đảm an toàn các hoạt động trong Quân chủng."
    },
    {
        id: "p2_c14",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 14. Chỉ thị số 76/CT-BQP ngày 28 tháng 4 năm 2026 của Bộ trưởng Bộ quốc phòng về nội dung gì?",
        options: [
            "Về việc tăng cường xây dựng nền nếp chính quy; quản lý, rèn luyện kỷ luật và bảo đảm an toàn, đáp ứng yêu cầu nhiệm vụ trong tình hình mới.",
            "Về việc tăng cường công tác chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong QĐNDVN.",
            "Về việc tăng cường một số biện pháp trong công tác giáo dục, quản lý chấp hành pháp luật Nhà nước, kỷ luật Quân đội và bảo đảm an toàn trong QĐNDVN.",
            "Tăng cường quản lý chấp hành pháp luật Nhà nước, kỷ luật Quân đội và bảo đảm an toàn trong QĐNDVN."
        ],
        answer: 1,
        explain: "Mẹo: Nhớ Chỉ thị 76 = Công tác CHÍNH TRỊ, quản lý TƯ TƯỞNG (chỉ duy nhất đáp án này có 2 từ này)."
    },
    {
        id: "p2_c15",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 15. Công văn số 1503/TM-QHNT ngày 27/3/2025 của Bộ Tổng Tham mưu về việc tăng cường tuần tra, canh gác, bảo đảm an toàn cơ quan, đơn vị; quy định đối với mục tiêu trọng yếu tổ chức canh gác mỗi vọng có bao nhiêu người/ca?",
        options: [
            "Một người/ca",
            "Hai người/ca",
            "Ba người/ca",
            "Bốn người/ca"
        ],
        answer: 2,
        explain: "Mẹo: Công văn 1503 - Mục tiêu trọng yếu -> Ba người/ca."
    },
    {
        id: "p2_c16",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 16. Công văn số 1503/TM-QHNT ngày 27/3/2025 của Bộ Tổng Tham mưu về việc tăng cường tuần tra, canh gác, bảo đảm an toàn cơ quan, đơn vị; quy định công tác kiểm tra đối với cấp tiểu đoàn và tương đương như thế nào?",
        options: [
            "Hằng ngày (đêm) phải phân công cán bộ thường xuyên kiểm tra các ca gác.",
            "Mỗi ngày phải kiểm tra thường xuyên, đột xuất ít nhất 01 lần/ngày đối với các vọng gác thuộc quyền.",
            "Hai ngày phải kiểm tra thường xuyên, đột xuất ít nhất 01 lần đối với các vọng gác thuộc quyền."
        ],
        answer: 1,
        explain: "Mẹo: Công văn 1503 - Cấp tiểu đoàn kiểm tra vọng gác -> Ít nhất 01 lần/ngày (thường xuyên, đột xuất)."
    },
    {
        id: "p2_c17",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 17. Chỉ thị số 12/CT-TM ngày 14/11/2025 của Tổng Tham mưu trưởng QĐNDVN chỉ thị về việc gì?",
        options: [
            "Về việc tăng cường một số biện pháp trong công tác giáo dục, quản lý chấp hành pháp luật Nhà nước, kỷ luật Quân đội và bảo đảm an toàn trong QĐNDVN.",
            "Về việc tăng cường quản lý chấp hành pháp luật Nhà nước, kỷ luật Quân đội và bảo đảm an toàn trong Quân đội NDVN",
            "Về việc tăng cường quản lý chấp hành kỷ luật Quân đội và bảo đảm an toàn trong Quân đội NDVN",
            "Về việc thống nhất quản lý số liệu báo cáo tình hình chấp hành kỷ luật trong QĐNDVN."
        ],
        answer: 3,
        explain: "Mẹo: Nhớ Chỉ thị 12/CT-TM = Thống nhất quản lý SỐ LIỆU BÁO CÁO tình hình chấp hành kỷ luật."
    },
    {
        id: "p2_c18",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 18. Hướng dẫn 3641/HD-TM ngày 14 tháng 11 năm 2023 của Bộ Tổng Tham mưu hướng dẫn về nội dung gì?",
        options: [
            "Về việc giải quyết cho hạ sĩ quan, binh sĩ nghỉ phép, phép đặc biệt.",
            "Về việc giải quyết cho sĩ quan, quân nhân chuyên nghiệp, công nhân và viên chức quốc phòng nghỉ phép, phép đặc biệt.",
            "Về việc giải quyết cho sĩ quan, quân nhân chuyên nghiệp, công nhân và viên chức quốc phòng nghỉ tranh thủ, đi về hằng ngày."
        ],
        answer: 2,
        explain: "Mẹo: Nhớ Hướng dẫn 3641 = Nghỉ TRANH THỦ, ĐI VỀ HẰNG NGÀY (của SQ, QNCN, CN&VCQP)."
    },
    {
        id: "p2_c19",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 19. Nghị quyết số 1683-NQ/ĐU ngày 09 tháng 6 năm 2026 của Đảng uỷ Quân chủng Hải quân lãnh đạo về nội dung gì?",
        options: [
            "Về việc tăng cường xây dựng chính quy; quản lý, rèn luyện kỷ luật và bảo đảm an toàn, đáp ứng yêu cầu nhiệm vụ trong tình hình mới.",
            "Về việc xử lý kỷ luật bảo đảm khách quan, công bằng, nghiêm minh, chính xác, kịp thời, đúng thẩm quyền, trình tự, thủ tục, đúng quy định của pháp luật, đồng bộ giữa kỷ luật QĐ với kỷ luật Đảng; kỷ luật QĐ không thấp hơn kỷ luật Đảng; kỷ luật QĐ không thay thế kỷ luật Đảng, kỷ luật đoàn thể và ngược lại.",
            "Về việc xử phạt vi phạm kỷ luật phải căn cứ vào tính chất, mức độ, hậu quả vi phạm và tình tiết giảm nhẹ, tình tiết tăng nặng",
            "Về việc đúng thời gian, công khai, khách quan, đúng thẩm quyền, bảo đảm công bằng, đúng quy định của Quân đội và pháp luật Nhà nước."
        ],
        answer: 0,
        explain: "Mẹo: Nhớ Nghị quyết 1683 = Xây dựng chính quy; quản lý, rèn luyện kỷ luật... trong tình hình mới."
    },
    {
        id: "p2_c20",
        category: "Phần II: Xây dựng nền nếp chính quy",
        question: "Câu 20. Chỉ thị số 12666/CT-HQ ngày 14 tháng 5 năm 2026 của Tư lệnh Hải quân chỉ thị về nội dung gì?",
        options: [
            "Về việc tăng cường xây dựng nền nếp chính quy; quản lý, rèn luyện kỷ luật và bảo đảm an toàn, đáp ứng yêu cầu nhiệm vụ trong tình hình mới.",
            "Về việc siết chặt quản lý kỷ luật, bảo đảm an toàn; chấm dứt các vụ việc vi phạm pháp luật, kỷ luật nghiêm trọng trong Quân chủng Hải quân.",
            "Về việc xử phạt vi phạm kỷ luật phải căn cứ vào tính chất, mức độ, hậu quả vi phạm và tình tiết giảm nhẹ, tình tiết tăng nặng.",
            "Về việc thực hiện 3 dứt điểm trong Quân chủng hải quân."
        ],
        answer: 1,
        explain: "Mẹo: Nhớ số 12666 rất gắt -> SIẾT CHẶT quản lý kỷ luật... CHẤM DỨT các vụ việc vi phạm nghiêm trọng."
    },

    // ==================== PHẦN III: THAM MƯU HUẤN LUYỆN CHIẾN ĐẤU (15 CÂU CŨ - TỐI ƯU TRẮC NGHIỆM) ====================
    {
        id: "p3_c1",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 1. Thời gian nghỉ bù trong huấn luyện đêm được quy định như thế nào?",
        options: [
            "Trước 21 giờ tính vào huấn luyện trong ngày; sau 21 giờ được nghỉ bù vào sáng hôm sau.",
            "Trước 22 giờ tính vào huấn luyện trong ngày; sau 22 giờ (trừ hành quân rèn luyện, luyện tập SSCĐ, diễn tập) được nghỉ bù vào ngày hôm sau.",
            "Trước 22 giờ tính vào huấn luyện trong ngày; sau 22 giờ (bao gồm cả hành quân rèn luyện, luyện tập SSCĐ, diễn tập) được nghỉ bù vào ngày hôm sau.",
            "Trước 23 giờ tính vào huấn luyện trong ngày; sau 23 giờ được nghỉ bù toàn bộ buổi sáng ngày hôm sau."
        ],
        answer: 1,
        explain: "Mốc thời gian là 22 giờ, có ngoại lệ: (trừ hành quân rèn luyện, luyện tập SSCĐ, diễn tập)."
    },
    {
        id: "p3_c2",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 2. Trong học theo chế độ của QNCN, NVCMKT, nội dung tự nghiên cứu được quy định bao nhiêu % trong tổng quỹ thời gian?",
        options: [
            "Chiếm 50% (nội dung chung 25%, chuyên ngành 25%).",
            "Chiếm 65% (nội dung chung 15%, chuyên ngành 50%).",
            "Chiếm 75% (nội dung chung 25%, chuyên ngành 50%).",
            "Chiếm 80% (nội dung chung 30%, chuyên ngành 50%)."
        ],
        answer: 2,
        explain: "QNCN, NVCMKT tự nghiên cứu = 75% tổng quỹ thời gian (25% nội dung chung + 50% nội dung chuyên ngành)."
    },
    {
        id: "p3_c3",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 3. Thời gian huấn luyện Hậu cần - Kỹ thuật (HC-KT) chiếm bao nhiêu % tổng thời gian huấn luyện?",
        options: [
            "Chiếm 6% (Hậu cần 3%, Kỹ thuật 3%).",
            "Chiếm 8% (Hậu cần 4%, Kỹ thuật 4%).",
            "Chiếm 10% (Hậu cần 5%, Kỹ thuật 5%).",
            "Chiếm 12% (Hậu cần 6%, Kỹ thuật 6%)."
        ],
        answer: 1,
        explain: "Thời gian huấn luyện HC-KT chiếm 8% tổng thời gian huấn luyện (Hậu cần 4%, Kỹ thuật 4%)."
    },
    {
        id: "p3_c4",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 4. Đột phá huấn luyện năm 2026 là gì?",
        options: [
            "“Cơ bản, làm chủ, chuyên sâu trong khai thác, sử dụng VKTBKT; nâng cao chất lượng huấn luyện cán bộ”.",
            "“Huấn luyện cơ bản, thiết thực, vững chắc; coi trọng huấn luyện đồng bộ, chuyên sâu theo nhiệm vụ”.",
            "“Cơ bản, thiết thực, vững chắc trong khai thác, làm chủ VKTBKT; nâng cao chất lượng diễn tập thực binh”.",
            "“Làm chủ vũ khí trang bị kỹ thuật mới, hiện đại; nâng cao trình độ tổ chức chỉ huy của cán bộ các cấp”."
        ],
        answer: 0,
        explain: "Đột phá huấn luyện năm 2026: 'Cơ bản, làm chủ, chuyên sâu trong khai thác, sử dụng VKTBKT; nâng cao chất lượng huấn luyện cán bộ'."
    },
    {
        id: "p3_c5",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 5. Thời gian huấn luyện HC-KT của đơn vị huấn luyện 4 ngày/tháng được quy định bố trí vào thời gian nào?",
        options: [
            "Bố trí xen kẽ vào các buổi chiều thứ Tư hằng tuần.",
            "Bố trí tập trung vào ngày huấn luyện thứ 4 hằng tháng.",
            "Bố trí lồng ghép trong giờ bảo quản VKTBKT ngày làm việc cuối tuần.",
            "Bố trí vào buổi sáng ngày huấn luyện đầu tiên của tháng."
        ],
        answer: 2,
        explain: "Đơn vị huấn luyện 4 ngày/tháng bố trí huấn luyện HC-KT lồng ghép trong giờ bảo quản VKTBKT ngày làm việc cuối tuần."
    },
    {
        id: "p3_c6",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 6. Trong học theo chế độ của QNCN, NVCMKT, nội dung bồi dưỡng tập trung được quy định bao nhiêu % trong tổng quỹ thời gian?",
        options: [
            "15% tổng quỹ thời gian.",
            "25% tổng quỹ thời gian.",
            "30% tổng quỹ thời gian.",
            "35% tổng quỹ thời gian."
        ],
        answer: 1,
        explain: "Nội dung bồi dưỡng tập trung chiếm 25% tổng quỹ thời gian (tự nghiên cứu chiếm 75%)."
    },
    {
        id: "p3_c7",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 7. Ngày pháp luật được quy định tổ chức vào thời gian nào trong tháng?",
        options: [
            "Buổi sáng ngày thứ Năm tuần thứ Nhất trong tháng.",
            "Buổi sáng ngày thứ Năm tuần thứ Hai trong tháng.",
            "Buổi chiều ngày thứ Năm tuần thứ Ba trong tháng.",
            "Buổi sáng ngày thứ Sáu tuần cuối cùng trong tháng."
        ],
        answer: 1,
        explain: "Ngày pháp luật tổ chức vào buổi sáng ngày thứ Năm tuần thứ Hai trong tháng."
    },
    {
        id: "p3_c8",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 8. Thời gian huấn luyện điều lệnh của chiến sĩ, phân đội được quy định bao nhiêu % trong tổng thời gian huấn luyện?",
        options: [
            "Chiếm 10% tổng thời gian huấn luyện.",
            "Chiếm 12% tổng thời gian huấn luyện.",
            "Chiếm 15% tổng thời gian huấn luyện.",
            "Chiếm 20% tổng thời gian huấn luyện."
        ],
        answer: 2,
        explain: "Thời gian huấn luyện điều lệnh của chiến sĩ, phân đội chiếm 15% tổng thời gian huấn luyện."
    },
    {
        id: "p3_c9",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 9. Thời gian tập huấn của sĩ quan được quy định bao nhiêu ngày trong năm?",
        options: [
            "05 ngày trong năm (05 ngày x 07 giờ = 35 giờ).",
            "07 ngày trong năm (07 ngày x 07 giờ = 49 giờ).",
            "10 ngày trong năm (10 ngày x 07 giờ = 70 giờ).",
            "14 ngày trong năm (14 ngày x 07 giờ = 98 giờ)."
        ],
        answer: 1,
        explain: "Thời gian tập huấn của sĩ quan là 07 ngày/năm (tương đương 49 giờ)."
    },
    {
        id: "p3_c10",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 10. Phân chia thời gian huấn luyện giáo án điều lệnh đội ngũ, thời gian luyện tập chiếm bao nhiêu %?",
        options: [
            "Chiếm 50 - 55%.",
            "Chiếm 55 - 60%.",
            "Chiếm 65 - 70%.",
            "Chiếm 75 - 80%."
        ],
        answer: 2,
        explain: "Thời gian luyện tập trong giáo án điều lệnh đội ngũ chiếm 65 - 70%."
    },
    {
        id: "p3_c11",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 11. Thời gian huấn luyện lựu đạn, vật cản ban đêm thường chiếm khoảng bao nhiêu % thời gian huấn luyện?",
        options: [
            "Chiếm khoảng 10 - 15%.",
            "Chiếm khoảng 20 - 30%.",
            "Chiếm khoảng 35 - 40%.",
            "Chiếm khoảng 45 - 50%."
        ],
        answer: 1,
        explain: "Huấn luyện lựu đạn, vật cản ban đêm chiếm khoảng 20 - 30% thời gian huấn luyện."
    },
    {
        id: "p3_c12",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 12. Ngày chính trị văn hóa tinh thần được quy định tổ chức vào thời gian nào trong tháng?",
        options: [
            "Buổi sáng ngày thứ Năm tuần thứ Nhất trong tháng.",
            "Buổi sáng ngày thứ Năm tuần thứ Hai trong tháng.",
            "Buổi sáng ngày thứ Năm tuần thứ Ba trong tháng.",
            "Buổi chiều ngày thứ Sáu tuần thứ Tư trong tháng."
        ],
        answer: 0,
        explain: "Ngày chính trị văn hóa tinh thần tổ chức vào buổi sáng ngày thứ Năm tuần thứ Nhất trong tháng."
    },
    {
        id: "p3_c13",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 13. Thời gian huấn luyện KTCĐBB của đối tượng QNCN, NVCMKT (16 ngày/tháng) được quy định bao nhiêu % trong tổng quỹ thời gian?",
        options: [
            "3% tổng quỹ thời gian.",
            "5% tổng quỹ thời gian.",
            "8% tổng quỹ thời gian.",
            "12% tổng quỹ thời gian."
        ],
        answer: 1,
        explain: "Thời gian huấn luyện KTCĐBB của QNCN, NVCMKT (16 ngày/tháng) chiếm 5%."
    },
    {
        id: "p3_c14",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 14. Thời gian huấn luyện chiến thuật BCHT của đối tượng QNCN, NVCMKT (4 ngày/tháng) được quy định bao nhiêu % trong tổng quỹ thời gian?",
        options: [
            "3% tổng quỹ thời gian.",
            "5% tổng quỹ thời gian.",
            "8% tổng quỹ thời gian.",
            "12% tổng quỹ thời gian."
        ],
        answer: 0,
        explain: "Thời gian huấn luyện chiến thuật BCHT của QNCN, NVCMKT (4 ngày/tháng) chiếm 3%."
    },
    {
        id: "p3_c15",
        category: "Phần III: Tham mưu huấn luyện chiến đấu",
        question: "Câu 15. Thời gian huấn luyện chiến thuật, thể lực của đối tượng chiến sĩ (4 ngày/tháng) được quy định bao nhiêu % trong tổng quỹ thời gian?",
        options: [
            "Chiến thuật BCHT chiếm 5%; thể lực chiếm 10%.",
            "Chiến thuật BCHT chiếm 3%; thể lực chiếm 12%.",
            "Chiến thuật BCHT chiếm 4%; thể lực chiếm 15%.",
            "Chiến thuật BCHT chiếm 8%; thể lực chiếm 12%."
        ],
        answer: 1,
        explain: "Đối tượng chiến sĩ (4 ngày/tháng): Chiến thuật BCHT chiếm 3%; thể lực chiếm 12%."
    },

    // ==================== PHẦN IV: THAM MƯU TÁC CHIẾN CÔNG BINH (10 CÂU CŨ - TỐI ƯU TRẮC NGHIỆM) ====================
    {
        id: "p4_c1",
        category: "Phần IV: Tham mưu tác chiến công binh",
        question: "Câu 1. Theo Điều lệnh tác chiến Hải quân ban hành năm 2018, đối tượng tác chiến của Hải quân và các lực lượng vũ trang trên hướng biển là gì?",
        options: [
            "Các lực lượng hải quân, không quân của địch tiến công từ hướng biển và các tàu thuyền xâm phạm vùng đặc quyền kinh tế.",
            "Các lực lượng vũ trang của địch tiến công xâm lược trên hướng biển và các lực lượng phản động, khủng bố, xâm phạm chủ quyền biển, đảo.",
            "Các lực lượng đổ bộ đường biển, đường không, đặc nhiệm của địch tiến công vào các căn cứ hải quân và đảo ven bờ.",
            "Các phương tiện bay không người lái, tàu mặt nước, tàu ngầm và tên lửa hành trình của địch hoạt động trên biển."
        ],
        answer: 1,
        explain: "Gồm lực lượng vũ trang địch tiến công xâm lược trên hướng biển (hải quân, không quân, đổ bộ, đặc nhiệm...) và các lực lượng phản động, khủng bố, xâm phạm chủ quyền biển, đảo."
    },
    {
        id: "p4_c2",
        category: "Phần IV: Tham mưu tác chiến công binh",
        question: "Câu 2. Theo Quyết định số 18/2020/QĐ-TTg ngày 10/6/2020 của Thủ tướng Chính phủ, khoảng cách từ tàu bay không người lái và phương tiện bay siêu nhẹ đến ranh giới khu vực cấm bay theo chiều ngang không nhỏ hơn bao nhiêu mét?",
        options: [
            "Không nhỏ hơn 200 mét ở mọi độ cao.",
            "Không nhỏ hơn 300 mét ở mọi độ cao.",
            "Không nhỏ hơn 500 mét ở mọi độ cao.",
            "Không nhỏ hơn 1.000 mét ở mọi độ cao."
        ],
        answer: 2,
        explain: "Quyết định 18/2020/QĐ-TTg: Khoảng cách theo chiều ngang không nhỏ hơn 500 mét ở mọi độ cao."
    },
    {
        id: "p4_c3",
        category: "Phần IV: Tham mưu tác chiến công binh",
        question: "Câu 3. Theo Chỉ thị 02/CT-TM ngày 02/01/2021 của Tổng Tham mưu trưởng QĐNDVN, thời gian trực SSCĐ của Vọng quan sát mắt trong các ngày lễ, tết, sự kiện chính trị trọng đại và khi có lệnh được quy định như thế nào?",
        options: [
            "Trực ban ngày từ 06h00 đến 18h00 hằng ngày.",
            "Trực tăng cường từ 05h00 đến 22h00 hằng ngày.",
            "Trực liên tục 24/24 giờ (cả ngày và đêm).",
            "Trực luân phiên 12 giờ/ngày theo ca trực chiến."
        ],
        answer: 2,
        explain: "Chỉ thị 02/CT-TM: Vọng quan sát mắt trực liên tục 24/24 giờ (cả ngày và đêm) vào dịp lễ, tết, sự kiện trọng đại."
    },
    {
        id: "p4_c4",
        category: "Phần IV: Tham mưu tác chiến công binh",
        question: "Câu 4. Khi có các sự kiện quan trọng của đất nước, dịp Lễ, Tết, các đơn vị tổ chức trực SSCĐ như thế nào?",
        options: [
            "Duy trì quân số trực như ngày thường, chỉ tăng cường lực lượng trực ban nội vụ và tuần tra canh gác.",
            "Tổ chức trực theo quy định của BQP, QCHQ; người chỉ huy các cơ quan, đơn vị báo cáo Chỉ huy Lữ đoàn quyết định tăng cường lực lượng.",
            "Tự động huy động 100% quân số đơn vị trực chiến tại vị trí tập kết và triển khai phương án chiến đấu.",
            "Tổ chức trực theo quy định của cấp tiểu đoàn; đại đội chủ động bố trí quân số trực dự bị tại doanh trại."
        ],
        answer: 1,
        explain: "Tổ chức lực lượng SSCĐ theo quy định của BQP, QCHQ; căn cứ tình hình thực tế, chỉ huy cơ quan, đơn vị báo cáo, đề nghị Chỉ huy Lữ đoàn xem xét, quyết định tăng cường lực lượng."
    },
    {
        id: "p4_c5",
        category: "Phần IV: Tham mưu tác chiến công binh",
        question: "Câu 5. Lực lượng trực ở trạng thái sẵn sàng chiến đấu thường xuyên đối với đơn vị Công binh được quy định như thế nào?",
        options: [
            "Duy trì 1/5 quân số; gồm 01 tiểu đoàn công binh hỗn hợp và các tổ bắn mục tiêu bay thấp.",
            "Duy trì 1/9 quân số; gồm 01 đại đội CB công trình, 01 trung đội CB vượt sông, vật cản, xe máy (thiếu) và các đội chuyên trách.",
            "Duy trì 1/12 quân số; gồm lực lượng vệ binh, 01 trung đội công binh cơ động và tổ dò gỡ bom mìn.",
            "Duy trì 1/6 quân số; gồm 02 đại đội công binh công trình, 01 đại đội vượt sông và tổ tìm kiếm cứu nạn."
        ],
        answer: 1,
        explain: "Duy trì 1/9 quân số: 01 đại đội CB công trình, 01 trung đội CB vượt sông (thiếu), 01 trung đội CB vật cản (thiếu), 01 trung đội xe máy (thiếu) và các đội dò gỡ bom mìn, chống khủng bố, cơ động vật cản A2, TKCN."
    },
    {
        id: "p4_c6",
        category: "Phần IV: Tham mưu tác chiến công binh",
        question: "Câu 6. Sở chỉ huy được tổ chức từ cấp nào trở lên?",
        options: [
            "Từ cấp đại đội và tương đương trở lên.",
            "Từ cấp tiểu đoàn và tương đương trở lên.",
            "Từ cấp trung đoàn (lữ đoàn) và tương đương trở lên.",
            "Từ cấp sư đoàn, vùng hải quân và tương đương trở lên."
        ],
        answer: 2,
        explain: "Sở chỉ huy tổ chức từ cấp trung đoàn (lữ đoàn) và tương đương trở lên (cấp tiểu đoàn, đại đội tổ chức vị trí chỉ huy)."
    },
    {
        id: "p4_c7",
        category: "Phần IV: Tham mưu tác chiến công binh",
        question: "Câu 7. Theo Hướng dẫn số 6768/HD-TC ngày 17/9/2021 của Cục Tác chiến/BTTM, biên chế quân số Vọng quan sát mắt gồm bao nhiêu người?",
        options: [
            "Biên chế 03 người.",
            "Biên chế 04 người.",
            "Biên chế 05 người.",
            "Biên chế 06 người."
        ],
        answer: 2,
        explain: "Hướng dẫn 6768/HD-TC quy định biên chế quân số Vọng quan sát mắt là 05 người."
    },
    {
        id: "p4_c8",
        category: "Phần IV: Tham mưu tác chiến công binh",
        question: "Câu 8. Tên kế hoạch A2 theo Điều lệ công tác Tham mưu tác chiến là gì?",
        options: [
            "Kế hoạch phòng, chống thiên tai, tìm kiếm cứu nạn và khắc phục hậu quả sự cố môi trường.",
            "Kế hoạch chuyển trạng thái SSCĐ, phòng chống bạo loạn lật đổ, khủng bố, biểu tình gây rối trật tự công cộng.",
            "Kế hoạch bảo đảm công binh trong tác chiến phòng thủ bảo vệ căn cứ, đảo và khu vực phòng thủ.",
            "Kế hoạch phòng không nhân dân, đánh trả tiến công đường không và bảo vệ mục tiêu trọng yếu."
        ],
        answer: 1,
        explain: "Kế hoạch A2 là Kế hoạch chuyển trạng thái sẵn sàng chiến đấu, phòng chống bạo loạn lật đổ, khủng bố, biểu tình gây rối trật tự công cộng."
    },
    {
        id: "p4_c9",
        category: "Phần IV: Tham mưu tác chiến công binh",
        question: "Câu 9. Chỉ thị số 10/CT-TM ngày 12/8/2026 về quản lý, sử dụng vũ khí, vật liệu nổ quy định Trung đội trưởng và tương đương kiểm tra, quản lý vũ khí, trang bị của cấp Tiểu đội như thế nào?",
        options: [
            "Hằng ngày kiểm tra nắm chắc số lượng, chất lượng VKTB; trực tiếp kiểm tra bảo quản, niêm cất và ký sổ theo dõi.",
            "Mỗi tuần kiểm tra một lần vào chiều thứ Sáu trong giờ bảo quản VKTBKT và báo cáo đại đội trưởng.",
            "Hai ngày kiểm tra một lần đối với từng tiểu đội; ký xác nhận vào sổ đăng ký vũ khí hằng tuần.",
            "Kiểm tra trước và sau khi huấn luyện bắn đạn thật, diễn tập dã ngoại hoặc bàn giao ca trực SSCĐ."
        ],
        answer: 0,
        explain: "Chỉ thị 10/CT-TM: Trung đội trưởng hằng ngày kiểm tra nắm chắc số lượng, chất lượng VKTB của cấp tiểu đội; trực tiếp kiểm tra việc bảo quản, niêm cất và ký xác nhận vào sổ quản lý."
    },
    {
        id: "p4_c10",
        category: "Phần IV: Tham mưu tác chiến công binh",
        question: "Câu 10. Đối tượng xử lý tình huống tác chiến Phòng không theo Chỉ lệnh số 12/CL-TM ngày 03/9/2026 của Bộ Tổng Tham mưu là gì?",
        options: [
            "Các loại máy bay quân sự, trực thăng vũ trang và tên lửa hành trình của nước ngoài xâm phạm vùng trời.",
            "Các phương tiện bay xâm phạm vùng trời Việt Nam (quân sự, dân dụng sai/không phép, UAV, siêu nhẹ, khinh khí cầu...).",
            "Các tàu bay không người lái (UAV) và phương tiện bay siêu nhẹ hoạt động trái phép quanh khu vực đóng quân.",
            "Các phương tiện bay không có tín hiệu nhận diện địch - ta hoạt động ở độ cao dưới 1.000 mét trên hướng biển."
        ],
        answer: 1,
        explain: "Chỉ lệnh 12/CL-TM quy định đối tượng xử lý là các phương tiện bay xâm phạm vùng trời Việt Nam (máy bay quân sự, dân dụng bay sai phép/không phép, UAV, phương tiện bay siêu nhẹ, khinh khí cầu, bóng thám không...)."
    }
];