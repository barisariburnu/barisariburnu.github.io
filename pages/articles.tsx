import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/types';
import styles from '@/styles/ArticlesPage.module.css';
import { articles } from '@/data/articles';

interface ArticlesPageProps {
  articles: Article[];
}

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Technical Articles</h1>
      <p className={styles.pageSubtitle}>
        Recent posts from{' '}
        <a
          href="https://medium.com/@barisariburnu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.underline}
        >
          Medium
        </a>{' '}
        where I share insights and tutorials about GIS technologies, database management, and software development.
      </p>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Articles', articles },
  };
}

export default ArticlesPage;
