/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import InfiniteScroll from "react-infinite-scroller"
import { Person } from "./person"



const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${pageParam}&limit=10`
    );
    const results = await response.json();
    return { results, nextPage: pageParam + 1, totalPages: 100 };
  };

export function InfinitePeople() {
  
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery(["sw-people"],fetchPosts,{
        getNextPageParam: lastPage => {
            if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage
            return undefined
        }
    
    })

    
    
    if (isLoading) {
        return <div style={{
            position: 'fixed',
            top:"5px",
            right:0
        }}> loading ...</div>
    }

    if (isError) {
       return <div >error</div> 
    }

    return <InfiniteScroll 
        loadMore={fetchNextPage} 
        hasMore={hasNextPage}
    >
        {data ? data?.pages.map((pge) => (
            pge.results.map((item) => (
                <Person key={item.id} name={item.author} pic={item.download_url} />
            ))
        )):null}
    </InfiniteScroll>
}