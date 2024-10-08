import './Content.scss'
import classNames from 'classnames'
import React, { ComponentProps } from 'react'
import { FooterContainer } from '../Footer/FooterContainer'
import { MobileMenuContainer } from '../MobileMenu/MobileMenuContainer'
import { MobileCalendar } from '../MobileCalendar/MobileCalendar'

type Props = ComponentProps<'div'> & {
    scrollable?: boolean
    restrictMaxWidth?: boolean
}

const cn = 'content'

const ScrollContainer = (props: ComponentProps<'div'>) => <div {...props} />

export function Content(props: Props) {
    const { restrictMaxWidth, scrollable, children, className, ...divProps } = props
    const Container = scrollable ? ScrollContainer : React.Fragment
    return (
        <div
            className={classNames(cn, scrollable && `${cn}--scrollable`, className)}
            {...divProps}
        >
            <MobileMenuContainer />
            <MobileCalendar />
            {restrictMaxWidth ? (
                <Container>
                    <div className={`${cn}__max-width-wrapper`}>
                        {children}
                    </div>
                    <FooterContainer />
                </Container>
            ) : (
                <Container>
                    {children}
                    <FooterContainer />
                </Container>
            )}
        </div>
    )
}
