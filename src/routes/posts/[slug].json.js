import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export const get = async (req) => {
    const { slug } = req.params
    try {
        const query = gql`
            query Post($slug: String!) {
                post(where: {slug: $slug}) {
                    title
                    date
                    tags
                    author {
                        name
                        authorTitle: title
                        picture {
                            url(transformation: {image: {resize: {fit: clip, width: 50, height: 50}}})
                        }
                    }
                    content {
                        html
                    }
                    coverImage {
                        url
                    }
                }
            }
        `
        const { post } = await client.request(query, { slug })

        return {
            status: 200,
            body: { post }
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            body: { error: "There was a server error !" }
        }
    }
}