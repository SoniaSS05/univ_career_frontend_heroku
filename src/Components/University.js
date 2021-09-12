

export default function UniversityContainer({univs}) {
    return (
        <div>
          <td>
                            {univs.map((univ) =>
                                <tr  width='600px' height='50px'>{univ.name}</tr>
                            )}
                        </td>
            </div>
    )
}