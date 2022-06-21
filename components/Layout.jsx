import styles from '../styles/Layout.module.css';

const Layout = ({children}) => {
  return (
    <div classNmae={StyleSheet.container}>
        {children}
    </div>
  )
}

export default Layout