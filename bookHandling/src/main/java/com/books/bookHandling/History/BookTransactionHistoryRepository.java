package com.books.bookHandling.History;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

public interface BookTransactionHistoryRepository extends Repository<BookTransactionHistory, Integer> {


    @Query("""
            SELECT
            (COUNT (*) > 0) AS isBorrowed
            FROM BookTransactionHistory bookTransactionHistory
            WHERE bookTransactionHistory.userId = :userId
            AND bookTransactionHistory.book.id = :bookId
            AND bookTransactionHistory.returnApproved = false
            """)
    boolean isAlreadyBorrowedByUser(@Param("bookId") Integer bookId, @Param("userId") String userId);

}
