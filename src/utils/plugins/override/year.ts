const year = (data: any) => {
  const { response } = data;

  return {
    ...response,
    title:
      "Mua bán xe [BRAND] [MODEL] [YEAR] - Giá [BRAND] [MODEL] [YEAR] tại [SEO_LOCATION]",
    meta: [
      {
        name: "description",
        content:
          "Mua bán xe ô tô [BRAND] [MODEL] [YEAR] mới, cũ tại [SEO_LOCATION]. Xe thiết kế hiện đại, nội thất tiện nghi, động cơ bền bỉ, vận hành an toàn, đủ phiên bản, đủ màu. [MODEL] [YEAR] với thông tin báo giá đầy đủ, nhiều ưu đãi, thủ tục đơn giản đang được bán trên Chợ Tốt Xe - Chợ mua bán ô tô trực tuyến hàng đầu Việt Nam",
      },
    ],
    catDescription: "",
  };
};

export default year;
