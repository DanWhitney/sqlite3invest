# SQLite Select

**Summary**: in this tutorial, you will learn how to use SQLite SELECT statement to query data from a single table.

The SELECT statement is one of the most commonly used statements in SQL. The SQLite SELECT statement provides all features of the SELECT statement in SQL standard.

## Simple uses of SELECT statement

You can use the SELECT statement to perform a simple calculation as follows:

```sql
SELECT	1 + 1;
```
You can use multiple expressions in the SELECT statement as follows:

```sql
SELECT 
   10 / 5, 
   2 * 4 ;
```

## Querying data from a table using the SELECT statement

We often use the SELECT statement to query data from one or more table. The syntax of the SELECT statement is as follows:
```sql
SELECT DISTINCT column_list
FROM table_list
  JOIN table ON join_condition
WHERE row_filter
ORDER BY column
LIMIT count OFFSET offset
GROUP BY column
HAVING group_filter;
```

The SELECT statement is the most complex statement in SQLite. To help easier to understand each part, we will break the SELECT statement into multiple easy-to-understand tutorials.

 * Use ORDER BY clause to sort the result set
* Use DISTINCT clause to query unique rows in a table
* Use WHERE clause to filter rows in the result set
* Use LIMIT OFFSET clauses to constrain the number of rows returned
* Use INNER JOIN or LEFT JOIN to query data from multiple tables using join.
* Use GROUP BY to get the group rows into groups and apply aggregate function for each group.
* Use HAVING clause to filter groups

In this tutorial, we are going to focus on the simplest form of the SELECT statement that allows you to query data from a single table.

```sql
SELECT column_list
FROM table;
```

Even though the SELECT clause appears before the FROM clause, SQLite evaluates the FROM clause first and then the SELECT clause, therefore:

* First, specify the table where you want to get data from in the FROM clause. Notice that you can have more than one table in the FROM clause. We will discuss it in the subsequent tutorial.
* Second, specify a column or a list of comma-separated columns in the SELECT clause.
You use the semicolon (;) to terminate the statement.
