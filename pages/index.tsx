import { GetServerSideProps } from 'next'
import { FC } from 'react'
import Link from 'next/link'
import { observer } from 'mobx-react';
import { withAppData } from '../lib/withAppData';

const Index: FC<{ data: any, bar: number }> = observer(({ data, bar }) => {
  return (
    <div>
      <p>Index: {data.name} {bar}</p>
      <p><Link href="/sec">Second</Link></p>
    </div>
  )
})

export const getServerSideProps: GetServerSideProps = withAppData(async (_context) => {
  const data = await fetch('http://localhost:3000/api/hello').then(response => response.json())

  return {
    props: { data }
  }
})

export default Index
