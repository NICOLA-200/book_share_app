package com.books.bookHandling.book;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Getter;


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public class BorrowedBookResponse {

        private Integer id;
        private String title;
        private String authorName;
        private String isbn;
        private double rate;
        private boolean returned;
        private boolean returnApproved;
    }


