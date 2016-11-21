require('../css/index.css');
var React = require('react');
var ReactDom = require('react-dom');
var data = [
	{	
		show:true,
		avatar:'./src/img/A1.jpg',
		img:'./src/img/B1.jpg',
		sourse:'设计',
		title:'为什么昂贵的汽车要比便宜的汽车更富美感，外观设计好的汽车会增加很多生产成本吗？',
		writer:'Joe Sun',
		sign:'汽车设计、工业设计话题优秀回答者',
		sign2:'Car designer',
		content:'这事儿得分两面说。 一，要让昂贵的车比起便宜的车更富美感，确实生产成本要高一些。 二，昂贵的车比起便宜的车，不仅仅是生产成本更高，其本身的设计研发投入也是更高的。 我先说第二点，这样容易理解一些，因为第二点才是核心。昂贵的车和便宜的车，面对…',
		readers:'1834',
		comment:'347'
	},
	{
		show:true,
		avatar:'./src/img/A1.jpg',
		img:'./src/img/B2.jpg',
		sourse:'学习',
		title:'「一万小时定律」真的适合所有的领域吗？',
		writer:'田吉顺',
		sign:'医学、妇产科学话题优秀回答者',
		sign2:'丁香诊所，私信前先…',
		content:'「一万小时定律」并非适合所有领域，即使有很强意志力，也很难在3到4个领域成为世界顶级。 问题回答完毕，以下是解释。「一万小时定律」怎么回事： 首先需要说明的是，这个10000不是确数，不是说你得不多不少正好10000小时。大约可以理解成平均需要10000小…',
		readers:'11k',
		comment:'239'
	},
	{
		show:true,
		avatar:'./src/img/A1.jpg',
		sourse:'新闻',
		title:'电视台的脱口秀节目稿子是主持人自己准备的还是和编导一同商量的？',
		writer:'Zoey',
		sign:' 初级厨娘 / 普通上班族 / 最好的女朋友',
		content:'国内并没有特别优秀的脱口秀主持人。 国内并没有纯粹的脱口秀节目。 首先，主线肯定是编导确定的。部分的梗、需要表现突出的冲突重点、必要的互动这些都会在台本里仔细写出来。 现场录制的时候会发生很多事情，比如主持人突然的灵感、嘉宾的反馈、观众的反…',
		readers:'1021',
		comment:'281'
	},
	{
		show:true,
		avatar:'./src/img/A1.jpg',
		sourse:'汽车',
		title:'如何评价斯蒂文·霍尔（Steven Holl）所设计的四方当代美术馆？',
		writer:'孙少军',
		sign:'汽车行业话题优秀回答者',
		sign2:'被玩坏的白虎',
		content:'在两期知乎Live中，其实我已经陆陆续续把本回答中一些问题和黑幕的本质跟大家说了。我不会回答该回答下的任何问题，谢谢。 ',
		readers:'11k',
		comment:'898'
	},
	{
		show:true,
		avatar:'./src/img/A1.jpg',
		img:'./src/img/B5.jpg',
		sourse:'美食',
		title:'农村的土菜是不是特别好吃？如果是，为什么？',
		writer:'萝卜绿',
		sign:'畜牧业入行小雏鸡一只！',
		content:'我的观点：规模化散养的肉鸡和蛋鸡，它们的产品会比白羽肉鸡（所谓速生鸡）或者一般鸡蛋好吃；农家自己养的，由于养殖情况的不确定性，可能好吃，也可能不； 即：专业的散养＞白羽肉鸡，农家自养条件不明确，无法比较。 专业的散养＞白羽肉鸡，农家自养条件…',
		readers:'4244',
		comment:'1190'
	}
];
var Avatar = React.createClass({
	render:function () {
		return (
			<div className='avatar'>
				<a><img src={this.props.avatar}></img></a>
			</div>
		)
	}
});
var EntryBody = React.createClass({
	render:function(){
		var img = this.props.img ? <img className='origin_image inline-img zh-lightbox-thumb' src={this.props.img}></img> : null;
		var sign = this.props.sign2 ? <span className="bio">{this.props.sign2}</span> : null;
		return (
			<div className='expandable entry-body'>
				<div className="zm-item-vote"><a className="zm-item-vote-count js-expand js-vote-count">{this.props.readers}</a></div>
				<div className="zm-item-answer-author-info"><span className="summary-wrapper"><span className="author-link-line"><a className="author-link" href="#">{this.props.writer}</a><span className="icon icon-badge-best_answerer icon-badge"></span></span><span className="badge-summary"><a href="#">{this.props.sign}</a></span>
					{
						sign
					}
				</span></div>
				<div className="zm-item-rich-text expandable js-collapse-body"><div className="zh-summary summary clearfix">
					{
						img
					}
					{this.props.content}<a href="#" className="toggle-expand">显示全部</a></div></div>
			</div>
			)
	}
});
var FeedMeta = React.createClass({
	render:function(){
		return (
			<div className='feed-meta'>
				<div className='zm-item-meta answer-actions clearfix js-contentActions'>
					<div className="zm-meta-panel">
						<a className="follow-link zg-follow meta-item" href="#" id="sfb-2924969"><i className="z-icon-follow"></i>关注问题</a>
						<a href="#" name="addcomment" className="meta-item toggle-comment js-toggleCommentBox">
						<i className="z-icon-comment"></i>{this.props.comment}条评论</a>
						<a href="#" className="meta-item zu-autohide js-thank" data-thanked="false"><i className="z-icon-thank"></i>感谢</a>
						<a href="#" className="meta-item zu-autohide js-share goog-inline-block goog-menu-button" role="button"><div className="goog-inline-block goog-menu-button-outer-box"><div className="goog-inline-block goog-menu-button-inner-box"><div className="goog-inline-block goog-menu-button-caption"><i className="z-icon-share"></i>分享</div><div className="goog-inline-block goog-menu-button-dropdown">&nbsp;</div></div></div></a>
						<a href="#" className="meta-item zu-autohide js-collect"><i className="z-icon-collect"></i>收藏</a>
						<span className="zg-bull zu-autohide">•</span>
						<a href="#" className="meta-item zu-autohide js-noHelp">没有帮助</a>
						<span className="zg-bull zu-autohide">•</span>
						<a href="#" className="meta-item zu-autohide js-report">举报</a>
						<span className="zg-bull">•</span>
						<a href="#" className="meta-item copyright">作者保留权利</a>
						<button className="meta-item item-collapse js-collapse"><i className="z-icon-fold"></i>收起</button>
					</div>
				</div>
			</div>
			)
	}
});
var FeedContent = React.createClass({
	render:function(){
		return (
			<div className='feed-content'>
				<h2 className="feed-title"><a className="question_link" href="#">{this.props.title}</a></h2>
				<EntryBody sign2={this.props.sign2} img={this.props.img} readers={this.props.readers} content={this.props.content} writer={this.props.writer} sign={this.props.sign}></EntryBody>
				<FeedMeta comment={this.props.comment}></FeedMeta>
			</div>
			)
	}
})
var FeedSourse = React.createClass({
	render:function(){
		return (
			<div className='feed-source'>热门回答，来自<a href="#">{this.props.sourse}</a><a href="#" className="zg-follow zu-autohide follow-topic zu-edit-button">关注话题</a></div>
			)
	}
})
var FeedMain = React.createClass({
	render:function(){
		return (
			<div className='feed-main'>
				<FeedSourse sourse={this.props.sourse}></FeedSourse>
				<FeedContent sign2={this.props.sign2} img={this.props.img} readers={this.props.readers} comment={this.props.comment} content={this.props.content} sign={this.props.sign} title={this.props.title} writer={this.props.writer}></FeedContent>
			</div>
			)
	}
})
var FeedItem = React.createClass({
	getInitialState:function () {
		return {
			show:true,
		}
	},
	changeShow:function(){
		this.setState({
			show: !this.state.show
		})
	},
	render:function () {
		var a = '';
		if(this.state.show){
			a = <div className='feed-item folding feed-item-hook'>
						<button onClick={this.changeShow}></button>
						<div className='feed-item-inner'>
							<Avatar avatar={this.props.avatar}></Avatar>
							<FeedMain sign2={this.props.sign2} img={this.props.img} readers={this.props.readers} comment={this.props.comment} content={this.props.content} sign={this.props.sign} sourse={this.props.sourse} title={this.props.title} writer={this.props.writer}></FeedMain>
						</div>
					</div>
		}else{
			a = null;
		}

		return (a)
	}
});
var List = React.createClass ({
	render: function () {
		var datas = this.props.datas;
		var row=[];
		datas.forEach(function (data,index){ 
			row.push(<FeedItem index={index} data={datas} show={data.show} sign2={data.sign2} avatar={data.avatar} img={data.img} readers={data.readers} comment={data.comment} key = {index} content={data.content} sign={data.sign} writer={data.writer} sourse={data.sourse} title={data.title}></FeedItem>)
		});
		return (
			<div id='js-home-feed-list' className='zu-main-content-inner zhi-general-list topstory clearfix'>
				{
					row
				}
			</div>
			)
	}
})
ReactDom.render(
	<List datas={data}></List>,
	document.getElementById('root')
)