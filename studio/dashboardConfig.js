export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60450838f64f700ba47377bc',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-jy6ipxei',
                  apiId: '5f66f436-299a-46a9-b74e-7440601023f1'
                },
                {
                  buildHookId: '60450838ad3d9458800fbb70',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-16trfnn9',
                  apiId: 'e1df2c4c-7800-49ce-844d-ca1a593579fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sivertbjo/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-16trfnn9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
