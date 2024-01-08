import React, { useState } from 'react';
import Layout from "../components/Layout";
import Router from 'next/router';

const Draft: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            const body = { title, content };
            await fetch('/api/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            await Router.push('/drafts');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Layout>
            <div>
                <form onSubmit={submitData}>
                    <h1>New Draft</h1>
                    <input
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title'
                        type='text'
                        value={title}
                    />
                    <textarea
                        cols={50}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Content'
                        rows={8}
                        value={content}
                    />
                    <input
                        disabled={!content || !title}
                        type='submit'
                        value='Create'
                    />
                    <a
                        className='back'
                        href='#'
                        onClick={() => Router.push('/')}
                    >or Cancel
                    </a>
                </form>
            </div>
            <style jsx>{`
                .page {
                    align-items: center;
                    background: var(--geist-background);
                    display: flex;
                    justify-content: center;
                    padding: 3rem;
                }
                input[type='text'],
                textarea {
                    border-radius: 0.25rem;
                    border: 0.125rem solid var(--transparent20);
                    margin: 0.5rem 0;
                    padding: 0.5rem;
                    width: 100%;
                }
                input[type='submit'] {
                    background: var(--background-light);
                    border: 0;
                    cursor: pointer;
                    padding: 1rem 2rem;
                }
                input[type='submit']:disabled {
                    cursor: not-allowed;
                }
                .back {
                    background: var(--background-mid);
                    border: 0;
                    border-radius: 0.25rem;
                    cursor: pointer;
                    margin-left: 1rem;
                    padding: 1rem 2rem;
                    text-decoration: none;
                }
            `}</style>
        </Layout>
    )
}

export default Draft;