import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export const get = async req => {
    const { slug } = req.params
    try {
        const query = gql`
            query Page ($slug: String!) {
                page(where: { slug: $slug }) {
                    title
                    content {
                        html
                    }
                }
            }
        `

        const { page } = await client.request(query, { slug })
        return {
            status: 200,
            body: { page }
        }
    } catch (error) {
        return {
            status: 500,
            body: { error: "There was a server error !" }
        }
    }
}