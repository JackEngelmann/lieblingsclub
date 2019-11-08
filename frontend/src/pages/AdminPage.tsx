import * as R from 'ramda'
import './AdminPage.scss'
import React from 'react'
import { Page } from '../components/Page'
import { Content } from '../components/Content'
import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Event } from '../api'
import { EditableEntity } from '../components/EditableEntity'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { useHistory } from 'react-router'
import { useClubs, CLUBS_QUERY } from '../containers/useClubs'
import { Button } from '../components/Button'
import { H1Title } from '../components/H1Title'
import { Icon } from '../components/Icon'

const cn = 'admin-page'

// TODO: permission system!

const EVENTS_QUERY = gql`
    query AdminEventsQuery {
        events {
            id
            name
        }
    }
`

const DELETE_EVENT_MUTATION = gql`
    mutation AdminDeleteEvent($id: Int!) {
        deleteEvent(id: $id) {
            id
        }
    }
`

const DELETE_CLUB_MUTATION = gql`
    mutation AdminDeleteClub($id: Int!) {
        deleteClub(id: $id) {
            id
        }
    }
`

export function AdminPage() {
    const clubs = R.sortBy(R.prop('name'), useClubs()[0] || [])
    const eventsQueryResult = useQuery<{ events: Event[] }>(EVENTS_QUERY)
    const events =
        eventsQueryResult.data &&
        R.sortBy(R.prop('name'), eventsQueryResult.data.events)
    const [deleteEventMutation] = useMutation(DELETE_EVENT_MUTATION)
    const [deleteClubMutation] = useMutation(DELETE_CLUB_MUTATION)
    const history = useHistory()

    function deleteEvent(id: number) {
        const isSure = window.confirm('Sure?')
        if (!isSure) return
        deleteEventMutation({
            variables: { id },
            refetchQueries: [{ query: EVENTS_QUERY }],
        })
    }

    function deleteClub(id: number) {
        const isSure = window.confirm('Sure?')
        if (!isSure) return
        deleteClubMutation({
            variables: { id },
            refetchQueries: [{ query: CLUBS_QUERY }],
        })
    }

    return (
        <Page>
            <div className={cn}>
                <H1Title>Administration</H1Title>
                <div className={`${cn}__content`}>
                    <div className={`${cn}__column`}>
                        <div className={`${cn}__column-header`}>
                            <h2>Clubs</h2>
                            <Button
                                borderless
                                secondary
                                onClick={() => history.push('/admin/add-club')}
                            >
                                <Icon icon="plus" />
                            </Button>
                        </div>
                        <div className={`${cn}__column-content`}>
                            {clubs ? (
                                clubs.map(c => (
                                    <EditableEntity
                                        key={c.id}
                                        onDelete={() => deleteClub(c.id)}
                                        onEdit={() =>
                                            history.push(`/admin/club/${c.id}`)
                                        }
                                    >
                                        {c.name}
                                    </EditableEntity>
                                ))
                            ) : (
                                <LoadingIndicator />
                            )}
                        </div>
                    </div>
                    <div className={`${cn}__column`}>
                        <div className={`${cn}__column-header`}>
                            <h2>Events</h2>
                            <Button
                                onClick={() => history.push('/admin/add-event')}
                                secondary
                                borderless
                            >
                                <Icon icon="plus" />
                            </Button>
                        </div>
                        <div className={`${cn}__column-content`}>
                            {events ? (
                                events.map(e => (
                                    <EditableEntity
                                        key={e.id}
                                        onDelete={() => deleteEvent(e.id)}
                                        onEdit={() =>
                                            history.push(`/admin/event/${e.id}`)
                                        }
                                    >
                                        {e.name}
                                    </EditableEntity>
                                ))
                            ) : (
                                <LoadingIndicator />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}