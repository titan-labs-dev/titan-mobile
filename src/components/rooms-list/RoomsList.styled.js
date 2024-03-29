import styled from 'styled-components/native'

export const RoomsWrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-left: 16;
	padding-right: 16;
	margin-top: 32;
`

export const Title = styled.Text`
	font-size: 32;
	font-weight: bold;
	color: ${(props) => props.theme.colors.main};
	margin-bottom: 32;
`

export const ButtonWrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
`
