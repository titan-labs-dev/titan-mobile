import { Toast } from 'native-base'

const SHOW_TOAST_DURATION = 3000

export const showToast = ({ message, duration = SHOW_TOAST_DURATION }) => Toast.show({
		text: message,
		duration,
	})
