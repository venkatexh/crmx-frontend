import "../../sass/components/contact/contact.component.scss";

const Body = ({contact}) => {
  const {tags} = contact;
  return (
    <div className={'contactBody'}>
      <div className={'left'}>
        <div className={'heading'}>Feed</div>
      </div>
      <div className={'right'}>
        <div className={'heading'}>Tags</div>
        <div className={'tagsList'}>
          {
            tags?.map((tag, idx) => {
              return <div className={'contactTag'} key={idx}>{tag.name}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}
export default Body;