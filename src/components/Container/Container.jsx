const Container = ({ children }) => {
  return (
    <div className=" container m-auto  w-mobile pt-2.5 desktop:w-desktop">
      {' '}
      {children}
    </div>
  )
}

export default Container
