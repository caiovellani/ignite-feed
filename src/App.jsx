import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="John Doe"
            content="Hello World"
          />
          <Post 
            author="John Doe"
            content="Hello World"
          />
        </main>
      </div>
    </div>
  )
}