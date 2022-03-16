import "../../sass/components/contact/contact.component.scss";

const Header = ({campaign}) => {
  const {name, from, status} = campaign;
  return <div className={'contactHeader'}>
    <div className={'left'}>
      <div className={'name'}>{name}</div>
      <div>From {from}</div>
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