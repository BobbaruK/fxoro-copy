const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_VI() {
  return {
    social: {
      followUsOn: "Theo dõi chúng tôi trên",
      getOurApp: "Tải ứng dụng của chúng tôi",
      getOurAppFromApple: `Tải ứng dụng của chúng tôi từ <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Tải ứng dụng của chúng tôi từ <span lang="en">Google Play</span>`,
    },
    disclaimer: {
      para1: `Trang web này đang được vận hành bởi MCA Intelifunds Ltd, giao dịch dưới tên ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD, giao dịch dưới tên "${logoText.value}", là một công ty dịch vụ tài chính được thành lập và đăng ký theo luật pháp của Cộng hòa Síp, được cấp phép và quản lý bởi Ủy ban Chứng khoán và Trao đổi Síp (CySEC) với số giấy phép 126/10.`,
      para3: `Địa chỉ: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Síp.`,
      para4: `Quỹ của khách hàng được giữ trong các tài khoản riêng biệt và được bảo hiểm bởi quỹ bồi thường khách hàng theo điều kiện hợp lệ.`,
      para5: `<u>Phủ nhận rủi ro</u>`,
      para6: `CFD là các công cụ phức tạp và có rủi ro cao về việc mất tiền nhanh chóng do đòn bẩy. <strong>${footerPercent.value}% tài khoản nhà đầu tư bán lẻ mất tiền khi giao dịch CFD với nhà cung cấp này</strong>. Bạn nên xem xét xem mình có hiểu cách CFD hoạt động và liệu bạn có đủ khả năng để chịu rủi ro cao về việc mất tiền.`,
      para7: `Ủy ban Chứng khoán Quốc gia Tây Ban Nha (CNMV) đã quyết định rằng, do tính phức tạp của CFD và rủi ro liên quan, việc mua sản phẩm như vậy bởi Khách hàng Bán lẻ không phù hợp. Trong bối cảnh này, theo các yêu cầu liên quan được giới thiệu bởi CNMV, bạn được cảnh báo rằng bạn sắp mua một sản phẩm phức tạp và khó hiểu: Hợp đồng chênh lệch (CFD). CNMV đã quyết định rằng, do tính phức tạp và rủi ro liên quan, việc mua sản phẩm này bởi nhà đầu tư bán lẻ không phù hợp.`,
      para8: {
        para: `Do đó, CFD có thể không phải là một khoản đầu tư lý tưởng cho mọi người. Tỷ lệ đòn bẩy cao có sẵn cho các nhà giao dịch CFD có thể hoạt động theo một cách nào đó hoặc đối nghịch với bạn. Bạn chỉ nên đầu tư tiền mà bạn có khả năng để mất. CFD là các tài sản tài chính đòn bẩy phức tạp. Giao dịch Forex, Hàng hóa, Chỉ số và Cổ phiếu dựa trên CFD, hoặc bất kỳ công cụ cơ sở khác của Công ty, ngụ ý mức độ rủi ro cao và có thể dẫn đến mất vốn của bạn. Trước khi tham gia giao dịch, xem xét mục tiêu tài chính của bạn, kỹ năng của bạn và đánh giá các rủi ro có thể đi kèm khi giao dịch Sản phẩm Công ty. Tài sản phái sinh như CFD và các công cụ khác từ các thị trường khác có thể có tính biến động cực đoan. CFD có thể chuyển đổi giá nhanh chóng và có thể miêu tả thay đổi trong điều kiện thị trường do các sự kiện không thể dự đoán. Không một trong những sự thật này có thể bị thao túng bởi bạn hoặc {logoText}. Nên tốt nhất là tham khảo ý kiến ​​tư vấn tài chính có giấy phép. {logoText} không cung cấp lời khuyên tài chính cho khách hàng và thông tin được cung cấp ở đây chỉ dành cho mục đích tiếp thị. Hiệu suất trong quá khứ không phải là một chỉ báo cho kết quả trong tương lai. Hãy chắc chắn đọc {riskWarningPage} để hiểu rõ các rủi ro inherent khi giao dịch Sản phẩm Công ty.`,
        riskWarning: `Cảnh báo rủi ro`,
      },
      para9: `MCA Intelifunds Limited không cung cấp Hợp đồng chênh lệch cho cư dân của một số khu vực như Hoa Kỳ, Cộng hòa Hồi giáo Iran và Canada.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Đã đăng ký bản quyền`,
    },
  };
}

export default footer_VI;
