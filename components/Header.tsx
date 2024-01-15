import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/" legacyBehavior>
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          color: #000;
          display: inline-block;
          text-decoration: none;
        }

        .left a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className='left'>
        <Link href="/" legacyBehavior>
          <a className='bold' data-active={isActive('/')}>Feed</a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }
          .a {
            color: var(--geist-foreground);
            display: inline-block;
            text-decoration: none;
          }
          .left a[data-active='true'] {
            color: gray
          }
          a + a {
            margin-left: 1rem
          }
        `}</style>
      </div>
    );
    right = (
      <div className='right'>
        <p>Validating session...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className='right'>
        <Link href='/api/auth/signin' data-active={isActive('/signup')} >
          Log in
        </Link>
        <style jsx>{`
          a {
            color: var(--geist-foreground);
            display: inline-block;
            text-decoration: none;
          }
          a + a {
            margin-left: 1rem;
          }
          .right {
            margin-left: auto;
          }
          .right a {
            border: 1px solid var(--geist-foreground);
            border-radius: 3px;
            padding: 0.5rem 1rem;
          }
        `}</style>
      </div>
    )
  }

  if (session) {
    left = (
      <div className='left'>
        <Link href='/' legacyBehavior>
          <a className='bold' data-active={isActive('/')}>Feed</a>
        </Link>
        <Link href='/drafts' legacyBehavior>
          <a data-active={isActive('/drafts')}>My Drafts</a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }
          a {
            color: var(--geist-foreground);
            display: inline-block;
            text-decoration: none;
          }
          .left a[data-active='true'] {
            color: gray;
          }
          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className='right'>
        <p>{session.user.name} ({session.user.email})</p>
        <Link href='/create' legacyBehavior>
          <button>
            <a> New Post</a>
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <a>Log Out</a>
        </button>
        <style jsx>{`
          a {
            color: var(--geist-foreground);
            display: inline-block;
            text-decoration: none;
          }
          p {
            display: inline-block;
            font-size: 1.3rem;
            padding-right: 1rem;
          }
          a + a {
            margin-left: 1rem;
          }
          .right {
            margin-left: auto;
          }
          .right a {
            border: 1px solid var(--geist-foreground);
            border-radius: 3px;
            padding: 0.5rem 1rem;
          }
          button {
            border: none;
          }
        `}</style>
      </div>
    )
  }

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          align-items: center;
          display: flex;
          padding: 2rem;
        }
      `}</style>
    </nav>
  );
};

export default Header;
