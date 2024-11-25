package com.books.bookHandling.book;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//public class BookRepository {
//
//    public Integer save(BookRequest request, Authentication connectedUser) {
//        // User user = ((User) connectedUser.getPrincipal());
//            Book book = bookMapper.toBook(request);
//        // book.setOwner(user);
//        return bookRepository.save(book).getId();
//    }
//}

@Repository
public interface BookRepository  extends JpaRepository<Book, Integer> {


    @Query("""
            SELECT book
            FROM Book book
            WHERE book.archived = false
            AND book.shareable = true
            AND book.createdBy != :userId
            """)
    Page<Book> findAllDisplayableBooks(Pageable pageable, String userId);
}