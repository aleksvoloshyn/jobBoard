import { Dna } from 'react-loader-spinner'
const Loader = () => {
  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{ margin: 'auto', marginTop: '20px' }}
      wrapperClass="dna-wrapper"
    />
  )
}

export default Loader
