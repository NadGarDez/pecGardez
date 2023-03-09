import { gql } from "@apollo/client";


export const BLOG_LIST_QUERY = gql`
    query {
        blogsList{
        count
            items {
                id
                title
                subtitle
                metadata
                imageUrl
            }
        }
    }
`;


export const BOOK_LIST_QUERY = gql`
    query {
        booksList{
            count
            items {
            id
            title
            subtitle
            metadata
            imageUrl
        }
    }
    }
`;


export const BLOG_QUERY = gql`
    query($blog: ID!) {
        blog(id: $blog){
            id
            title
            subtitle
            metadata
            content
            imageUrl
        }
    }
`;


export const BOOK_QUERY = gql`
    query($book: ID!) {
        book(id: $book){
            id
            title
            subtitle
            metadata
            imageUrl
            review
    		documentId
        }
    }
`;


export const FILE_QUERY = gql`
    query($imageId: ID!){
        file(id: $imageId) {
            downloadUrl
        }
    }
`;