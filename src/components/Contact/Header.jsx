import "../../sass/components/contact/contact.component.scss";

const Header = ({contact}) => {
  const {firstName, lastName, email, status} = contact;
  return <div className={'contactHeader'}>
    <div className={'left'}>
      <div className={'name'}>{firstName} {lastName}</div>
      <div>{email}</div>
    </div>
    <div>
      <div>Added 2nd Jan 2022</div>
      <div>Last Updated 2nd Jan 2022</div>
    </div>
    <div>Actions</div>
    <div>{status}</div>
  </div>
}

export default Header;