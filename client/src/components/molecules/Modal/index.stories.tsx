import React from 'react'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import Modal, { Props } from './index'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import A from '../../atoms/A'
import { ModalContent, ModalSubtitle, ModalTitle } from './style'

export default {
  title: 'Molecules/Modal',
  component: Modal,
}

export const Default = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <Modal {...props}>
        <ModalTitle size="h1">Title</ModalTitle>
        <ModalSubtitle>subtitle</ModalSubtitle>
        <ModalContent height="210px" style={{ background: 'pink' }}>
          Content
        </ModalContent>
      </Modal>
    </GlobalThemeProvider>
  )
}

export const LoginExample = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <Modal {...props}>
        <ModalTitle size="h1">로그인</ModalTitle>
        <ModalSubtitle>이메일로 로그인</ModalSubtitle>
        <ModalContent height="392px">
          <ModalContent height="265px">
            <Input placeholder="이메일을 입력하세요" />
            <Input placeholder="비밀번호를 입력하세요" />
            <Button size="lg">로그인</Button>
            <A fontColor="yellow">42seoul 계정으로 로그인</A>
          </ModalContent>
          <A fontColor="black">아직 회원이 아니신가요?</A>
        </ModalContent>
      </Modal>
    </GlobalThemeProvider>
  )
}

export const RegisterExample = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <Modal height="712px" {...props}>
        <ModalTitle size="h1">회원가입</ModalTitle>
        <ModalSubtitle>이메일로 회원가입</ModalSubtitle>
        <ModalContent height="420px">
          <ModalContent height="300px">
            <Input placeholder="닉네임" />
            <Input placeholder="이메일" />
            <Input placeholder="비밀번호" />
            <Input placeholder="비밀번호 확인" />
          </ModalContent>
          <Button size="lg">회원가입</Button>
        </ModalContent>
      </Modal>
    </GlobalThemeProvider>
  )
}