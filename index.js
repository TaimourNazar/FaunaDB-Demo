var faunadb = require('faunadb'), q = faunadb.query;
require('dotenv').config();

( async ()=>{
    var adminClient = new faunadb.Client({ secret: process.env.FAUNA_DB_SECRET });
    
    try {
        const result = await adminClient.query(
            //q.CreateDatabase({ name: 'testdb' })
            
            //  q.CreateKey({
            //      database: q.Database('testdb'),
            //      role: 'admin',
            //   })

            //q.CreateCollection({ name: 'messages' })

            // q.CreateIndex({
            //     name: 'detail_by_title',
            //     source: q.Collection('messages'),
            //     terms: [{ field: ['data', 'detail'] }],
            // })

            // q.Create(
            //     q.Collection('messages'),
            //     { data: { detail: 'Waoo!!' } },
            // )

            // q.Map(
            //     [
            //       'Be Positive',
            //       'That is great',
            //       'Weather is awesome',
            //     ],
            //     q.Lambda(
            //       'post_title',
            //       q.Create(
            //         q.Collection('messages'),
            //         { data: { detail: q.Var('post_title') } },
            //       )
            //     ),
            // )

            q.Get(q.Ref(q.Collection('messages'), '279721837258082817'))

            // q.Get(
            //     q.Match(q.Index('detail_by_title'), 'Be Positive')
            // )

            // q.Update(
            //     q.Ref(q.Collection('messages'), '279721837258082817'),
            //     { data: { detail: "Too Good" } },
            // )

            // q.Update(
            //     q.Ref(q.Collection('messages'), '279721837258082817'),
            //     { data: { detail2: "Also Too Good" } },
            // )

            // q.Replace(
            //     q.Ref(q.Collection('messages'), '279721837258082817'),
            //     { data: { detail: 'Ok 1'} },
            // )

            // q.Delete(
            //     q.Ref(q.Collection('messages'), '279721826639153669')
            // )
        );    
        console.log(result);
    } 
    catch (error) {
        console.log(error);   
    }

})();