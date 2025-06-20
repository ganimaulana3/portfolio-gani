import NextImage from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import React from 'react'
import { MdVerified as VerifiedIcon } from 'react-icons/md'

import { BACKDROP_IMAGE, DEVTO_PROFILE, PROFILE_URL } from '@/common/constant'

import Image from '../../elements/Image'
import Status from '../../elements/Status'
import ToggleThemeIcon from '../../elements/ToggleThemeIcon'
import Tooltip from '../../elements/Tooltip'

interface ProfileHeaderProps {
  expandMenu: boolean
  imageSize: number
}

export default function ProfileHeader({ expandMenu, imageSize }: ProfileHeaderProps) {
  return (
    <div
      className={clsx(
        'flex w-full flex-grow items-center gap-4 lg:flex-col lg:gap-0.5',
        expandMenu && 'flex-col !items-start'
      )}
    >
      <div className="relative hidden w-full flex-col items-center overflow-hidden pb-2 lg:flex">
        <Status />
        <div className="h-24 w-full overflow-hidden rounded-lg dark:brightness-50">
          <NextImage
            src={BACKDROP_IMAGE}
            alt="profile"
            width={100}
            height={100}
            className="-ml-4 w-full scale-125"
            priority
          />
        </div>
        <div className="absolute -right-1 bottom-[55px] z-10 rounded-xl py-2 pr-2">
          <ToggleThemeIcon />
        </div>
        <div className="z-10 -mt-11 rounded-full border-2 border-white shadow-md dark:border-neutral-800">
          <Image
            src="/pp_lugh.jpeg"
            alt="profile"
            width={expandMenu ? 80 : imageSize * 0.9}
            height={expandMenu ? 80 : imageSize * 0.9}
            rounded="rounded-full"
            className="lg:hover:scale-105"
          />
        </div>
      </div>
      <Image
        src="/pp_lugh.jpeg"
        alt="profile"
        width={expandMenu ? 80 : imageSize * 0.9}
        height={expandMenu ? 80 : imageSize * 0.9}
        rounded="rounded-full"
        className="lg:hidden lg:hover:scale-105"
      />
      <div className="mt-1 flex items-center gap-2">
        <Link href="/" passHref>
          <h2 className="font-sora flex-grow whitespace-nowrap text-lg font-medium lg:text-xl">Gani Maulana</h2>
        </Link>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>
      <Link
        href={DEVTO_PROFILE}
        target="_blank"
        className="font-sora hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex"
      >
        @ganimaulana
      </Link>
    </div>
  )
}
