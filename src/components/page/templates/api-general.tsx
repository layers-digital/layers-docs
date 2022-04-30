import { h } from '@stencil/core';
import { toHypertext } from '../to-hypertext';

export default props => {
  const { page } = props;

  return (
    <article>
      {page.renderTitle !== false ? <h1>{page.title}</h1> : null}
      {page.tableOfContents !== false ? (
        <div class="page-meta">
          <docs-table-of-contents links={page.headings} basepath={page.path}/>
        </div>
      ) : null}

      <section class="markdown-content">
        {toHypertext(h, page.body)}
        {/* <docs-cards>
          {
            Template.categories.filter(c => c.link != '/docs/api').map((category) => (
              <docs-card header={category.title} href={category.link} icon={category.icon}>
                <p>{category.description}</p>
              </docs-card>
            ))
          }
        </docs-cards> */}
      </section>
      <docs-page-footer page={page} />
    </article>
  );
};
