/* 听后重复 — các bộ đề HSKK trung cấp, giọng gốc cắt từ file nghe của đề */
(function () {
  const K = (window.AIMEI_KOUYU = window.AIMEI_KOUYU || { days: [], repeat: [] });
  const add = (id, items) => K.repeat.push({ id, name: "Bộ " + id, dir: "audio/kouyu/" + id + "/", items });
  add("H81001", [
    { zh: "兴趣是最好的老师。", py: "Xìngqù shì zuì hǎo de lǎoshī.", vi: "Hứng thú là người thầy tốt nhất." },
    { zh: "你别忘了带照相机。", py: "Nǐ bié wàngle dài zhàoxiàngjī.", vi: "Bạn đừng quên mang máy ảnh nhé." },
    { zh: "桌子上放着一本书。", py: "Zhuōzi shang fàngzhe yì běn shū.", vi: "Trên bàn có đặt một quyển sách." },
    { zh: "这个问题必须马上解决。", py: "Zhège wèntí bìxū mǎshàng jiějué.", vi: "Vấn đề này phải giải quyết ngay." },
    { zh: "一年有春、夏、秋、冬四个季节。", py: "Yì nián yǒu chūn, xià, qiū, dōng sì ge jìjié.", vi: "Một năm có bốn mùa xuân, hạ, thu, đông." },
    { zh: "我们对你很有信心。", py: "Wǒmen duì nǐ hěn yǒu xìnxīn.", vi: "Chúng tôi rất tin tưởng bạn." },
    { zh: "这张卡的密码是你的生日。", py: "Zhè zhāng kǎ de mìmǎ shì nǐ de shēngrì.", vi: "Mật khẩu của thẻ này là ngày sinh của bạn." },
    { zh: "小李的男朋友特别幽默。", py: "Xiǎo Lǐ de nánpéngyou tèbié yōumò.", vi: "Bạn trai của Tiểu Lý cực kỳ hài hước." },
    { zh: "公司安排我下周三出差。", py: "Gōngsī ānpái wǒ xià zhōusān chūchāi.", vi: "Công ty sắp xếp cho tôi đi công tác vào thứ Tư tuần sau." },
    { zh: "王教授的教学经验比我丰富。", py: "Wáng jiàoshòu de jiàoxué jīngyàn bǐ wǒ fēngfù.", vi: "Giáo sư Vương có kinh nghiệm giảng dạy phong phú hơn tôi." }
  ]);
  add("H81002", [
    { zh: "上周五的会议我参加了。", py: "Shàng zhōuwǔ de huìyì wǒ cānjiā le.", vi: "Cuộc họp thứ Sáu tuần trước tôi có tham gia." },
    { zh: "他们学校有三百年的历史。", py: "Tāmen xuéxiào yǒu sānbǎi nián de lìshǐ.", vi: "Trường của họ có lịch sử ba trăm năm." },
    { zh: "春节是中国最重要的节日。", py: "Chūnjié shì Zhōngguó zuì zhòngyào de jiérì.", vi: "Tết Nguyên đán là ngày lễ quan trọng nhất của Trung Quốc." },
    { zh: "你女儿越来越漂亮了。", py: "Nǐ nǚ'ér yuè lái yuè piàoliang le.", vi: "Con gái bạn ngày càng xinh đẹp." },
    { zh: "她对附近的环境很满意。", py: "Tā duì fùjìn de huánjìng hěn mǎnyì.", vi: "Cô ấy rất hài lòng với môi trường xung quanh." },
    { zh: "我收到您的电子邮件了。", py: "Wǒ shōudào nín de diànzǐ yóujiàn le.", vi: "Tôi đã nhận được email của ông/bà rồi." },
    { zh: "我相信你这次一定会成功。", py: "Wǒ xiāngxìn nǐ zhè cì yídìng huì chénggōng.", vi: "Tôi tin lần này bạn nhất định sẽ thành công." },
    { zh: "昨天晚上的演出非常精彩。", py: "Zuótiān wǎnshang de yǎnchū fēicháng jīngcǎi.", vi: "Buổi biểu diễn tối qua vô cùng đặc sắc." },
    { zh: "这个办法值得试一试。", py: "Zhège bànfǎ zhíde shì yi shì.", vi: "Cách này đáng để thử một lần." },
    { zh: "我们的生活每天都在发生变化。", py: "Wǒmen de shēnghuó měi tiān dōu zài fāshēng biànhuà.", vi: "Cuộc sống của chúng ta mỗi ngày đều đang thay đổi." }
  ]);
  add("H81004", [
    { zh: "我每天坐地铁去上班。", py: "Wǒ měi tiān zuò dìtiě qù shàngbān.", vi: "Hằng ngày tôi đi tàu điện ngầm đi làm." },
    { zh: "他是我以前的邻居。", py: "Tā shì wǒ yǐqián de línjū.", vi: "Anh ấy là hàng xóm cũ của tôi." },
    { zh: "如果明天不下雨就好了。", py: "Rúguǒ míngtiān bú xià yǔ jiù hǎo le.", vi: "Giá mà ngày mai trời không mưa thì tốt." },
    { zh: "我觉得蓝色的更好看。", py: "Wǒ juéde lánsè de gèng hǎokàn.", vi: "Tôi thấy cái màu xanh dương đẹp hơn." },
    { zh: "你等一下，我马上就来。", py: "Nǐ děng yíxià, wǒ mǎshàng jiù lái.", vi: "Bạn đợi một chút, tôi đến ngay." },
    { zh: "李经理的办公室在对面。", py: "Lǐ jīnglǐ de bàngōngshì zài duìmiàn.", vi: "Văn phòng của giám đốc Lý ở phía đối diện." },
    { zh: "她对自己的收入很满意。", py: "Tā duì zìjǐ de shōurù hěn mǎnyì.", vi: "Cô ấy rất hài lòng với thu nhập của mình." },
    { zh: "植物离不开阳光、空气和水。", py: "Zhíwù lí bu kāi yángguāng, kōngqì hé shuǐ.", vi: "Thực vật không thể thiếu ánh nắng, không khí và nước." },
    { zh: "你点的这个菜真辣！", py: "Nǐ diǎn de zhège cài zhēn là!", vi: "Món bạn gọi cay thật đấy!" },
    { zh: "对不起，这里禁止抽烟。", py: "Duìbuqǐ, zhèlǐ jìnzhǐ chōuyān.", vi: "Xin lỗi, ở đây cấm hút thuốc." }
  ]);
  add("H81105", [
    { zh: "现在已经是夏天了。", py: "Xiànzài yǐjīng shì xiàtiān le.", vi: "Bây giờ đã là mùa hè rồi." },
    { zh: "这些练习题都比较简单。", py: "Zhèxiē liànxítí dōu bǐjiào jiǎndān.", vi: "Mấy bài tập này đều khá đơn giản." },
    { zh: "我叔叔想去中国旅游。", py: "Wǒ shūshu xiǎng qù Zhōngguó lǚyóu.", vi: "Chú tôi muốn đi du lịch Trung Quốc." },
    { zh: "刚才我去银行了。", py: "Gāngcái wǒ qù yínháng le.", vi: "Vừa nãy tôi đi ngân hàng." },
    { zh: "出去的时候别忘了关空调。", py: "Chūqu de shíhou bié wàngle guān kōngtiáo.", vi: "Lúc ra ngoài đừng quên tắt điều hòa." },
    { zh: "过程比结果更重要。", py: "Guòchéng bǐ jiéguǒ gèng zhòngyào.", vi: "Quá trình quan trọng hơn kết quả." },
    { zh: "那个司机对当地的环境很熟悉。", py: "Nàge sījī duì dāngdì de huánjìng hěn shúxī.", vi: "Người tài xế đó rất thông thạo khu vực địa phương." },
    { zh: "这样做不符合规定。", py: "Zhèyàng zuò bù fúhé guīdìng.", vi: "Làm như vậy không đúng quy định." },
    { zh: "那本小说我看过两遍。", py: "Nà běn xiǎoshuō wǒ kànguo liǎng biàn.", vi: "Cuốn tiểu thuyết đó tôi đã đọc hai lần." },
    { zh: "他们俩有很多共同语言。", py: "Tāmen liǎ yǒu hěn duō gòngtóng yǔyán.", vi: "Hai người họ rất hợp nhau, có nhiều điểm chung." }
  ]);
  add("H81106", [
    { zh: "祝您生日快乐！", py: "Zhù nín shēngrì kuàilè!", vi: "Chúc ông/bà sinh nhật vui vẻ!" },
    { zh: "他在网上认识了一个朋友。", py: "Tā zài wǎng shang rènshile yí ge péngyou.", vi: "Anh ấy quen một người bạn trên mạng." },
    { zh: "他们决定下个月结婚。", py: "Tāmen juédìng xià ge yuè jiéhūn.", vi: "Họ quyết định tháng sau kết hôn." },
    { zh: "会议马上就要开始了。", py: "Huìyì mǎshàng jiù yào kāishǐ le.", vi: "Cuộc họp sắp bắt đầu rồi." },
    { zh: "来，你先看看菜单。", py: "Lái, nǐ xiān kànkan càidān.", vi: "Nào, bạn xem thực đơn trước đi." },
    { zh: "北京是中国的首都。", py: "Běijīng shì Zhōngguó de shǒudū.", vi: "Bắc Kinh là thủ đô của Trung Quốc." },
    { zh: "飞机没有按时起飞。", py: "Fēijī méiyǒu ànshí qǐfēi.", vi: "Máy bay không cất cánh đúng giờ." },
    { zh: "王老师的普通话说得很标准。", py: "Wáng lǎoshī de pǔtōnghuà shuō de hěn biāozhǔn.", vi: "Thầy Vương nói tiếng phổ thông rất chuẩn." },
    { zh: "我们几乎每个周末都去看电影。", py: "Wǒmen jīhū měi ge zhōumò dōu qù kàn diànyǐng.", vi: "Hầu như cuối tuần nào chúng tôi cũng đi xem phim." },
    { zh: "非常感谢大家对我的帮助。", py: "Fēicháng gǎnxiè dàjiā duì wǒ de bāngzhù.", vi: "Rất cảm ơn mọi người đã giúp đỡ tôi." }
  ]);
  add("H81107", [
    { zh: "经理对他非常满意。", py: "Jīnglǐ duì tā fēicháng mǎnyì.", vi: "Giám đốc rất hài lòng về anh ấy." },
    { zh: "生气不能解决问题。", py: "Shēngqì bù néng jiějué wèntí.", vi: "Nổi giận không giải quyết được vấn đề." },
    { zh: "表演已经结束了。", py: "Biǎoyǎn yǐjīng jiéshù le.", vi: "Buổi biểu diễn đã kết thúc rồi." },
    { zh: "他的成绩提高得很快。", py: "Tā de chéngjì tígāo de hěn kuài.", vi: "Thành tích của cậu ấy tiến bộ rất nhanh." },
    { zh: "您真是越来越年轻了。", py: "Nín zhēn shì yuè lái yuè niánqīng le.", vi: "Ông/bà đúng là ngày càng trẻ ra." },
    { zh: "他有丰富的教学经验。", py: "Tā yǒu fēngfù de jiàoxué jīngyàn.", vi: "Thầy ấy có kinh nghiệm giảng dạy phong phú." },
    { zh: "决定了就不要后悔。", py: "Juédìng le jiù búyào hòuhuǐ.", vi: "Đã quyết định thì đừng hối hận." },
    { zh: "这个活动由王小姐负责。", py: "Zhège huódòng yóu Wáng xiǎojiě fùzé.", vi: "Hoạt động này do cô Vương phụ trách." },
    { zh: "我偶尔会去打打网球。", py: "Wǒ ǒu'ěr huì qù dǎda wǎngqiú.", vi: "Thỉnh thoảng tôi đi đánh quần vợt." },
    { zh: "别担心，一切都会好起来的。", py: "Bié dānxīn, yíqiè dōu huì hǎo qilai de.", vi: "Đừng lo, mọi chuyện rồi sẽ ổn thôi." }
  ]);
  add("H81208", [
    { zh: "快乐其实很简单。", py: "Kuàilè qíshí hěn jiǎndān.", vi: "Hạnh phúc thật ra rất giản đơn." },
    { zh: "这个城市的变化非常大。", py: "Zhège chéngshì de biànhuà fēicháng dà.", vi: "Thành phố này thay đổi rất nhiều." },
    { zh: "我们打算周末一起去爬山。", py: "Wǒmen dǎsuàn zhōumò yìqǐ qù pá shān.", vi: "Chúng tôi định cuối tuần cùng đi leo núi." },
    { zh: "看完电视别忘了洗脸。", py: "Kànwán diànshì bié wàngle xǐ liǎn.", vi: "Xem tivi xong đừng quên rửa mặt." },
    { zh: "健康比什么都重要。", py: "Jiànkāng bǐ shénme dōu zhòngyào.", vi: "Sức khỏe quan trọng hơn bất cứ thứ gì." },
    { zh: "你好，加油站禁止抽烟。", py: "Nǐ hǎo, jiāyóuzhàn jìnzhǐ chōuyān.", vi: "Chào anh/chị, trạm xăng cấm hút thuốc." },
    { zh: "他们俩的看法完全不一样。", py: "Tāmen liǎ de kànfǎ wánquán bù yíyàng.", vi: "Quan điểm của hai người họ hoàn toàn khác nhau." },
    { zh: "没关系，困难只是暂时的。", py: "Méi guānxi, kùnnan zhǐ shì zànshí de.", vi: "Không sao đâu, khó khăn chỉ là tạm thời." },
    { zh: "中国南方的气候比较湿润。", py: "Zhōngguó nánfāng de qìhòu bǐjiào shīrùn.", vi: "Khí hậu miền Nam Trung Quốc khá ẩm." },
    { zh: "那个问题没有引起大家的重视。", py: "Nàge wèntí méiyǒu yǐnqǐ dàjiā de zhòngshì.", vi: "Vấn đề đó chưa được mọi người coi trọng." }
  ]);
  add("H81209", [
    { zh: "学习是一件快乐的事。", py: "Xuéxí shì yí jiàn kuàilè de shì.", vi: "Học tập là một việc vui vẻ." },
    { zh: "校长办公室在三楼。", py: "Xiàozhǎng bàngōngshì zài sān lóu.", vi: "Phòng hiệu trưởng ở tầng ba." },
    { zh: "他女儿很可爱，也很聪明。", py: "Tā nǚ'ér hěn kě'ài, yě hěn cōngming.", vi: "Con gái anh ấy rất đáng yêu, lại rất thông minh." },
    { zh: "服务员，再来两杯啤酒。", py: "Fúwùyuán, zài lái liǎng bēi píjiǔ.", vi: "Phục vụ ơi, cho thêm hai cốc bia." },
    { zh: "表演马上就要开始了。", py: "Biǎoyǎn mǎshàng jiù yào kāishǐ le.", vi: "Buổi biểu diễn sắp bắt đầu rồi." },
    { zh: "我们差不多有五年没联系了。", py: "Wǒmen chàbuduō yǒu wǔ nián méi liánxì le.", vi: "Chúng tôi đã gần năm năm không liên lạc rồi." },
    { zh: "他接受了我们的邀请。", py: "Tā jiēshòule wǒmen de yāoqǐng.", vi: "Anh ấy đã nhận lời mời của chúng tôi." },
    { zh: "你看起来心情不错。", py: "Nǐ kàn qilai xīnqíng búcuò.", vi: "Trông bạn có vẻ đang vui." },
    { zh: "请把这些材料整理一下。", py: "Qǐng bǎ zhèxiē cáiliào zhěnglǐ yíxià.", vi: "Hãy sắp xếp lại số tài liệu này một chút." },
    { zh: "小王在管理方面比我有经验。", py: "Xiǎo Wáng zài guǎnlǐ fāngmiàn bǐ wǒ yǒu jīngyàn.", vi: "Về mặt quản lý, Tiểu Vương có kinh nghiệm hơn tôi." }
  ]);
  add("H81210", [
    { zh: "比赛已经结束了。", py: "Bǐsài yǐjīng jiéshù le.", vi: "Trận đấu đã kết thúc rồi." },
    { zh: "火车站附近有很多宾馆。", py: "Huǒchēzhàn fùjìn yǒu hěn duō bīnguǎn.", vi: "Gần ga tàu có rất nhiều khách sạn." },
    { zh: "您好，一共是十元三角。", py: "Nín hǎo, yígòng shì shí yuán sān jiǎo.", vi: "Chào anh/chị, tổng cộng là mười tệ ba hào." },
    { zh: "她把房间打扫得干干净净。", py: "Tā bǎ fángjiān dǎsǎo de gāngānjìngjìng.", vi: "Cô ấy dọn phòng sạch sẽ tinh tươm." },
    { zh: "两点半开会，大家不要迟到。", py: "Liǎng diǎn bàn kāihuì, dàjiā búyào chídào.", vi: "Hai giờ rưỡi họp, mọi người đừng đến muộn." },
    { zh: "这儿的风景真美！", py: "Zhèr de fēngjǐng zhēn měi!", vi: "Phong cảnh ở đây đẹp thật!" },
    { zh: "抱歉，打扰您一下。", py: "Bàoqiàn, dǎrǎo nín yíxià.", vi: "Xin lỗi, làm phiền ông/bà một chút." },
    { zh: "第一印象往往很重要。", py: "Dì-yī yìnxiàng wǎngwǎng hěn zhòngyào.", vi: "Ấn tượng đầu tiên thường rất quan trọng." },
    { zh: "先生，这儿禁止抽烟。", py: "Xiānsheng, zhèr jìnzhǐ chōuyān.", vi: "Thưa anh, ở đây cấm hút thuốc." },
    { zh: "他从小就养成了写日记的习惯。", py: "Tā cóngxiǎo jiù yǎngchéngle xiě rìjì de xíguàn.", vi: "Từ nhỏ cậu ấy đã có thói quen viết nhật ký." }
  ]);
  add("H81416", [
    { zh: "这附近有家超市。", py: "Zhè fùjìn yǒu jiā chāoshì.", vi: "Gần đây có một siêu thị." },
    { zh: "他向经理请假了。", py: "Tā xiàng jīnglǐ qǐngjià le.", vi: "Anh ấy đã xin giám đốc cho nghỉ phép." },
    { zh: "放心，我明天一定不会迟到。", py: "Fàngxīn, wǒ míngtiān yídìng bú huì chídào.", vi: "Yên tâm, ngày mai tôi chắc chắn sẽ không đến muộn." },
    { zh: "图书馆的电梯坏了。", py: "Túshūguǎn de diàntī huài le.", vi: "Thang máy của thư viện hỏng rồi." },
    { zh: "很多年轻人参加了这次比赛。", py: "Hěn duō niánqīngrén cānjiāle zhè cì bǐsài.", vi: "Rất nhiều bạn trẻ đã tham gia cuộc thi lần này." },
    { zh: "我已经把材料翻译好了。", py: "Wǒ yǐjīng bǎ cáiliào fānyì hǎo le.", vi: "Tôi đã dịch xong tài liệu rồi." },
    { zh: "对不起，这里不允许抽烟。", py: "Duìbuqǐ, zhèlǐ bù yǔnxǔ chōuyān.", vi: "Xin lỗi, ở đây không được phép hút thuốc." },
    { zh: "李教授说话很幽默。", py: "Lǐ jiàoshòu shuōhuà hěn yōumò.", vi: "Giáo sư Lý nói chuyện rất hài hước." },
    { zh: "那儿的景色美极了！", py: "Nàr de jǐngsè měi jí le!", vi: "Cảnh sắc ở đó đẹp vô cùng!" },
    { zh: "你最好先跟你父母商量商量。", py: "Nǐ zuìhǎo xiān gēn nǐ fùmǔ shāngliang shāngliang.", vi: "Tốt nhất bạn nên bàn bạc với bố mẹ trước đã." }
  ]);
})();
