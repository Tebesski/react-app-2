--
-- PostgreSQL database dump
--

-- Dumped from database version 15.5
-- Dumped by pg_dump version 15.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: board; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.board (
    board_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    board_name character varying(255) NOT NULL,
    board_creation_time timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: log; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.log (
    log_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    log_date timestamp without time zone DEFAULT now() NOT NULL,
    log_action character varying(255) NOT NULL,
    entity_type character varying(255) NOT NULL,
    entity_id uuid NOT NULL,
    entity_field character varying(255),
    new_value text,
    old_value text,
    board_id uuid NOT NULL
);


--
-- Name: task; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.task (
    task_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    task_list_id uuid NOT NULL,
    board_id uuid NOT NULL,
    task_name character varying(255) NOT NULL,
    task_priority character varying(255) NOT NULL,
    task_due_date date DEFAULT now() NOT NULL,
    task_description text NOT NULL,
    task_creation_time timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: task_list; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.task_list (
    task_list_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    task_list_name character varying(255) NOT NULL,
    num integer NOT NULL,
    board_id uuid NOT NULL
);


--
-- Name: task_list_num_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.task_list_num_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: task_list_num_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.task_list_num_seq OWNED BY public.task_list.num;


--
-- Name: task_list num; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task_list ALTER COLUMN num SET DEFAULT nextval('public.task_list_num_seq'::regclass);


--
-- Data for Name: board; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.board (board_id, board_name) FROM stdin;
\.


--
-- Data for Name: log; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.log (log_id, log_date, log_action, entity_type, entity_id, entity_field, new_value, old_value, board_id) FROM stdin;
\.


--
-- Data for Name: task; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.task (task_id, task_list_id, task_name, task_priority, task_due_date, task_description, task_creation_time) FROM stdin;
\.


--
-- Data for Name: task_list; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.task_list (task_list_id, task_list_name, num, board_id) FROM stdin;
\.


--
-- Name: task_list_num_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.task_list_num_seq', 1, false);


--
-- Name: board board_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.board
    ADD CONSTRAINT board_pkey PRIMARY KEY (board_id);


--
-- Name: log log_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.log
    ADD CONSTRAINT log_pkey PRIMARY KEY (log_id);


--
-- Name: task_list task_list_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task_list
    ADD CONSTRAINT task_list_pkey PRIMARY KEY (task_list_id);


--
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY (task_id);


--
-- Name: log fk_log_board_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.log
    ADD CONSTRAINT fk_log_board_id FOREIGN KEY (board_id) REFERENCES public.board(board_id) ON DELETE CASCADE;


--
-- Name: task_list fk_task_list_board_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task_list
    ADD CONSTRAINT fk_task_list_board_id FOREIGN KEY (board_id) REFERENCES public.board(board_id) ON DELETE CASCADE;


--
-- Name: task task_task_list_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_task_list_id_fkey FOREIGN KEY (task_list_id) REFERENCES public.task_list(task_list_id) ON DELETE CASCADE;

ALTER TABLE ONLY public.task
    ADD CONSTRAINT fk_task_board_id FOREIGN KEY (board_id) REFERENCES public.board(board_id) ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO postgres;


--
-- Name: FUNCTION pg_replication_origin_advance(text, pg_lsn); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_advance(text, pg_lsn) TO postgres;


--
-- Name: FUNCTION pg_replication_origin_create(text); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_create(text) TO postgres;


--
-- Name: FUNCTION pg_replication_origin_drop(text); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_drop(text) TO postgres;


--
-- Name: FUNCTION pg_replication_origin_oid(text); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_oid(text) TO postgres;


--
-- Name: FUNCTION pg_replication_origin_progress(text, boolean); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_progress(text, boolean) TO postgres;


--
-- Name: FUNCTION pg_replication_origin_session_is_setup(); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_is_setup() TO postgres;


--
-- Name: FUNCTION pg_replication_origin_session_progress(boolean); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_progress(boolean) TO postgres;


--
-- Name: FUNCTION pg_replication_origin_session_reset(); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_reset() TO postgres;


--
-- Name: FUNCTION pg_replication_origin_session_setup(text); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_setup(text) TO postgres;


--
-- Name: FUNCTION pg_replication_origin_xact_reset(); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_reset() TO postgres;


--
-- Name: FUNCTION pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone) TO postgres;


--
-- Name: FUNCTION pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn); Type: ACL; Schema: pg_catalog; Owner: -
--

GRANT ALL ON FUNCTION pg_catalog.pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn) TO postgres;

--
-- PostgreSQL database dump complete
--

