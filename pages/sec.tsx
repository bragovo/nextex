import { GetServerSideProps } from 'next'
import { FC, useEffect } from 'react'
import Link from 'next/link'
import { observer } from 'mobx-react';
import { withAppData } from '../lib/withAppData'

const Sec: FC<{ data: any, foo: number }> = observer(({ data, foo }) => {
  return (
    <div>
      <p>Second: {data.state} {foo}</p>
      <p><Link href="/">Index</Link></p>
    </div>
  )
})

export const getServerSideProps: GetServerSideProps = withAppData(async (_context) => {
  const data = await fetch('http://localhost:3000/api/hello').then(response => response.json())

  return {
    props: {
      data
    }
  }
})

export default Sec
