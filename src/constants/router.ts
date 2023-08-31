import LearnerInfo from '../pages/learnerInfo';
import Login from '../pages/login';
import MessageAll from '../pages/messageAll';
import MessageIndividual from '../pages/messageIndividual';
import Notice from '../pages/notice';
import NoticeEdit from '../pages/noticeEdit';
import Registration from '../pages/noticeRegistration';
import SendMessageToAll from '../pages/sendMessageToAll';
import SendMessageToIndividual from '../pages/sendMessageToIndividual';
import { SiteMapType } from '../types/router';

const LOGIN_URL = '/login';
const NOTICE_URL = '/notice';
const NOTICE_EDIT_URL = '/notice/edit';
const NOTICE_REGISTRATION_URL = '/notice/registration';
const MESSAGES_ALL_URL = '/messageAll';
const MESSAGES_INDIVIDUAL_URL = '/messageIndividual';
const MESSAGE_SEND_TO_ALL_URL = '/messageAll/send';
const MESSAGE_SEND_TO_INDIVIDUAL_URL = '/messageIndividual/send';
const LEARNER_INFO_URL = '/learnerInfo';

const SITE_MAP: SiteMapType = {
	[LOGIN_URL]: {
		label: '로그인',
		element: Login,
		bread_crumbs: [],
	},
	[NOTICE_URL]: {
		label: '공지사항 관리',
		element: Notice,
		bread_crumbs: [],
	},
	[NOTICE_EDIT_URL]: {
		label: '공지사항 수정',
		element: NoticeEdit,
		bread_crumbs: [{ label: '공지사항 관리', url: NOTICE_URL }],
	},
	[NOTICE_REGISTRATION_URL]: {
		label: '공지사항 등록',
		element: Registration,
		bread_crumbs: [{ label: '공지사항 관리', url: NOTICE_URL }],
	},
	[MESSAGES_ALL_URL]: {
		label: '모두에게.HEADER',
		element: MessageAll,
		bread_crumbs: [],
	},
	[MESSAGES_INDIVIDUAL_URL]: {
		label: '개인에게.HEADER',
		element: MessageIndividual,
		bread_crumbs: [],
	},
	[MESSAGE_SEND_TO_ALL_URL]: {
		label: '모두에게 메세지 보내기',
		element: SendMessageToAll,
		bread_crumbs: [{ label: '모두에게.HEADER', url: MESSAGES_ALL_URL }],
	},
	[MESSAGE_SEND_TO_INDIVIDUAL_URL]: {
		label: '개인에게 메세지 보내기',
		element: SendMessageToIndividual,
		bread_crumbs: [{ label: '개인에게.HEADER', url: MESSAGES_INDIVIDUAL_URL }],
	},
	[LEARNER_INFO_URL]: {
		label: '학습자 정보',
		element: LearnerInfo,
		bread_crumbs: [],
	},
};

export {
	LEARNER_INFO_URL,
	LOGIN_URL,
	MESSAGES_ALL_URL,
	MESSAGES_INDIVIDUAL_URL,
	MESSAGE_SEND_TO_ALL_URL,
	MESSAGE_SEND_TO_INDIVIDUAL_URL,
	NOTICE_EDIT_URL,
	NOTICE_REGISTRATION_URL,
	NOTICE_URL,
	SITE_MAP,
};
